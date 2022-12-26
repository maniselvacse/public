import multer from 'multer';
import path from 'path';

const dirPath = path.resolve(process.cwd() + '/../public/assets/uploads/');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, dirPath)
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '_' + req.params.id + path.extname(file.originalname))
    }
})

var fileFilterFn = function (req, file, cb) {

    if (file.fieldname.includes('image')) {
        if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
            cb(null, true);
        } else {
            console.log(file.fieldname + ' Not Uploaded. Mime Type: ' + file.mimetype)
            cb(null, false);
        }
    }

    if (file.fieldname.includes('document')) {
        if (
            file.mimetype === "application/pdf" ||
            file.mimetype === 'application/msword' ||
            file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) {
            cb(null, true);
        } else {
            console.log(file.fieldname + ' Not Uploaded. Mime Type: ' + file.mimetype)
            cb(null, false);
        }
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilterFn,
    limits: {
        fileSize: 7 * 1000000
    }
});

const uploadConfig = upload.fields([
    { name: 'home_image', maxCount: 1 },
    { name: 'about_image', maxCount: 1 },
    { name: 'about_my_profile_image', maxCount: 1 },
    { name: 'resume_document', maxCount: 1 }
]);

export default uploadConfig;