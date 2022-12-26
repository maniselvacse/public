import mongoose from 'mongoose';
import config from 'config';

import BaseJoi from 'joi';
import JoiDate from '@joi/date';

const Joi = BaseJoi.extend(JoiDate);

const { Schema } = mongoose;
const profileSchema = new Schema({
    name: String,
    my_self: String,
    about_me: String,
    about_my_profile: String,
    email: String,
    dob: String,
    skills: String,
    hobbies: String,
    services: Array,
    experience: Array,
    education: Array,
    social_media: Array,
    skills_and_percentage: Array,
    attachments: Object,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, {
    versionKey: false
});
const createAndUpdateSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    my_self: Joi.string().min(3).max(300).required(),
    about_me: Joi.string().min(3).max(300).required(),
    about_my_profile: Joi.string().min(3).max(500).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    dob: Joi.date().format('YYYY-MM-DD'),
    skills: Joi.string().required().min(3).max(500),
    hobbies: Joi.string().required().min(3).max(500),
    services: Joi.array().items({
        name: Joi.string().min(2).max(50).required(),
        description: Joi.string().min(3).max(200).required(),
    }),
    experience: Joi.array().items({
        company_name: Joi.string().min(2).max(50).required(),
        designation: Joi.string().min(3).max(70).required(),
        location: Joi.string().min(3).max(50).required(),
        start_date: Joi.date().format('YYYY-MM-DD'),
        end_date: Joi.string().required(),
    }),
    education: Joi.array().items({
        institution_name: Joi.string().min(3).max(70),
        qualification: Joi.string().min(2).max(30),
        location: Joi.string().min(3).max(50),
        start_date: Joi.date().format('YYYY-MM-DD'),
        end_date: Joi.string(),
    }),
    social_media: Joi.array().items({
        name: Joi.string().min(3).max(20),
        url: Joi.string().min(5).max(80)
    }),
    skills_and_percentage: Joi.array().items({
        name: Joi.string().min(3).max(70),
        percentage: Joi.number().integer().min(1).max(100)
    })
});

const getSchema = Joi.object({
    _id: Joi.string().min(5),
    name: Joi.string().min(2).max(50),
    email: Joi.string().min(5).max(60),
    dob: Joi.date().format('YYYY-MM-DD'),
    skills: Joi.string().min(3).max(500)
});

//Middleware
profileSchema.pre('updateOne', function () {
    this.set({ updatedAt: new Date() });
});

const uploadDirectory = config.get('uploadDirectory');
profileSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        delete ret.__v;
        for (var key in ret.attachments) {
            ret.attachments[key] = uploadDirectory + ret.attachments[key];
        }
    }
});

const collectionName = 'profiles';
const profileModel = mongoose.model(collectionName, profileSchema);

mongoose.connect(config.get('mongoDB.url'));

export const createUser = async (req, res) => {
    const attributes = req.body.data.attributes;
    const result = createAndUpdateSchema.validate(attributes, { abortEarly: false });
    if (!result.error) {
        await profileModel.create(attributes, (err, result) => {
            if (!err) {
                res.status(201).send({
                    data: {
                        id: result._id,
                        type: collectionName,
                        meta: {
                            message: 'New record inserted to ' + collectionName + ' collection.'
                        }
                    }
                });
            } else {
                res.send(err);
            }
        });
    } else {
        res.send(result.error.details);
    }
};

export const getUsers = async (req, res) => {
    let filterQuery = {};
    const filters = req.query.filter;
    const result = getSchema.validate(filters, { abortEarly: false });

    /* Filters Setup */
    if (typeof filters !== 'undefined') {
        if (typeof filters._id !== 'undefined') {
            filterQuery._id = { '_id': filters._id };
        }
        if (typeof filters.name !== 'undefined') {
            filterQuery.name = { $regex: new RegExp(`^${filters.name}`, 'gi') };
        }
        if (typeof filters.skills !== 'undefined') {
            filterQuery.skills = { $regex: '.*' + filters.skills + '.*' };
        }
        if (typeof filters.email !== 'undefined') {
            filterQuery.email = { $regex: new RegExp(`^${filters.email}`, 'gi') };
        }
    }

    /* Pagination Setup */
    const pageOptions = { page: 0, limit: 10 }
    if (typeof req.query.page !== 'undefined') {
        pageOptions.page = parseInt(req.query.page.number, 10) - 1 || pageOptions.page;
        pageOptions.limit = parseInt(req.query.page.size, 10) || pageOptions.limit;
    }

    if (!result.error) {
        profileModel.countDocuments(filterQuery, function (err, count) {
            profileModel.find(filterQuery, (error, result) => {
                if (error) {
                    res.send(error);
                } else {
                    let metaData = {
                        pageNumber: pageOptions.page + 1,
                        pageSize: pageOptions.limit,
                        totalRecords: count
                    };
                    res.send({ type: 'profile', data: result, meta: metaData });
                }
            })
                .sort({ _id: 'desc' })
                .skip(pageOptions.page * pageOptions.limit)
                .limit(pageOptions.limit);
        });
    } else {
        res.send(result.error.details);
    }
};

export const deleteUser = (req, res) => {
    profileModel.deleteOne({ _id: req.params.id }, (error, result) => {
        if (!error) {
            res.send({
                type: 'profiles',
                meta: {
                    message: collectionName + ' record has been deleted.'
                }
            });
        } else {
            res.send(error);
        }
    })
};

export const updateUser = (req, res) => {
    const attributes = req.body.data.attributes;
    const result = createAndUpdateSchema.validate(attributes, { abortEarly: false });
    if (!result.error) {
        profileModel.updateOne({ _id: { $eq: req.params.id } }, attributes, function (err, docs) {
            if (!err) {
                res.send({
                    data: {
                        id: result._id,
                        type: collectionName,
                        meta: {
                            message: collectionName + ' record has been updated.'
                        }
                    }
                });
            } else {
                res.send(err);
            }
        });
    } else {
        res.send(result.error.details);
    }
};

export const profileImages = (req, res) => {
    const id = req.params.id;
    const attributes = {
        attachments: {
            home_image: req.files.home_image[0].filename,
            about_image: req.files.about_image[0].filename,
            about_my_profile_image: req.files.about_my_profile_image[0].filename,
            resume_document: req.files.resume_document[0].filename
        }
    };
    profileModel.updateOne({ _id: { $eq: id } }, attributes, function (err, docs) {
        if (!err) {
            res.send({
                data: {
                    id: id,
                    type: collectionName,
                    data: { attributes: attributes },
                    meta: { message: collectionName + ' record has been updated.' },
                }
            });
        } else {
            res.send(err);
        }
    });
};
