import mongoose from 'mongoose';
import config from 'config';

import BaseJoi from 'joi';
import JoiDate from '@joi/date';

const Joi = BaseJoi.extend(JoiDate);

const { Schema } = mongoose;
const blogSchema = new Schema({
    title: String,
    blog_description: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, {
    versionKey: false
});

const createAndUpdateSchema = Joi.object({
    title: Joi.string().min(2).max(50).required(),
    blog_description: Joi.string().min(3).max(300).required(),
});

const getSchema = Joi.object({
    _id: Joi.string().min(5),
    title: Joi.string().min(2).max(50),
    blog_description: Joi.string().min(5).max(60),
});

//Middleware
blogSchema.pre('updateOne', function () {
    this.set({ updatedAt: new Date() });
});

const collectionName = 'blog';
const blogModel = mongoose.model(collectionName, blogSchema);

mongoose.connect(config.get('mongoDB.url'));

export const createBlog = async (req, res) => {
    const attributes = req.body.data.attributes;
    const result = createAndUpdateSchema.validate(attributes, { abortEarly: false });
    if (!result.error) {
        await blogModel.create(attributes, (err, result) => {
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

export const getBlogs = async (req, res) => {
    let query = {};
    const filters = req.query.filter;
    const result = getSchema.validate(filters, { abortEarly: false });

    /* Filters Setup */
    if (typeof filters !== 'undefined') {
        if (typeof filters._id !== 'undefined') {
            query._id = { '_id': filters._id };
        }
        if (typeof filters.title !== 'undefined') {
            query.title = { $regex: '.*' + filters.title + '.*' };
        }
        if (typeof filters.blog_description !== 'undefined') {
            query.blog_description = { $regex: new RegExp(`^${filters.blog_description}`, 'gi') };
        }
    }

    /* Pagination Setup */
    const pageOptions = { page: 0, limit: 10 }
    if (typeof req.query.page !== 'undefined') {
        pageOptions.page = parseInt(req.query.page.number, 10) - 1 || pageOptions.page;
        pageOptions.limit = parseInt(req.query.page.size, 10) || pageOptions.limit;
    }

    if (!result.error) {
        blogModel.find(query, (error, result) => {
            if (error) {
                res.send(error);
            } else {
                result.page = {total_records: blogModel.countDocuments({})}
                res.send({ type: collectionName, data: result });
            }
        })
            .sort({ _id: 'desc' })
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit);
    } else {
        res.send(result.error.details);
    }
};

export const deleteBlog = (req, res) => {
    blogModel.deleteOne({ _id: req.params.id }, (error, result) => {
        if (!error) {
            res.send({
                type: collectionName,
                meta: {
                    message: collectionName + ' record has been deleted.'
                }
            });
        } else {
            res.send(error);
        }
    })
};

export const updateBlog = (req, res) => {
    const attributes = req.body.data.attributes;
    const result = createAndUpdateSchema.validate(attributes, { abortEarly: false });
    if (!result.error) {
        blogModel.updateOne({ _id: { $eq: req.params.id } }, attributes, function (err, docs) {
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
