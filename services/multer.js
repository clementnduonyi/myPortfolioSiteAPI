const multer = require('multer');


const ALLOWED_FORMAT = ['image/jpg', 'image/png', 'image/jpeg'];

const storage = multer.memoryStorage();



const fileFilter = (req, file, cb) => {
    if(ALLOWED_FORMAT.includes(file.mimetype)){
        cb(null, true);
    }else{
        cb(new Error('File format not supported or image size is more than 1mb!'), false);
    }
}
  
const upload = multer({ 
    storage, 
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    fileFilter
});

module.exports = upload;





