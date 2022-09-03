const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();
const { dataUri } = require('../services/dataUri')
const { cloudUpload } = require('../services/cloudinary');
const Image = mongoose.model('Image');

const cors = require('cors');


const corsOptions = {
    origin: 'https://clementnduonyi.com',
    optionsSuccessStatus: 200 
}
const upload = require('../services/multer')
const singleUpload = upload.single('image')

const imageUploadMiddleware = (req, res, next) =>{
    singleUpload(req, res, (error) => {
        if(error){
            res.status(422).send(error.message)
        }
        next();
    })
} 


router.post('', cors(corsOptions), imageUploadMiddleware, async (req, res) => {
    try{
        if(!req.file){throw new Error('Image not found');}
        const file64 = dataUri(req.file);
        const processedImage = await cloudUpload(file64.content)
        const image = new Image({
            url: processedImage.secure_url,
            cloudinaryId: processedImage.public_id,
        });

        const savedImage  = await image.save();
        return res.json({_id: savedImage.id, url: savedImage.url})
    }catch(error){
        return res.status(422).send({message: 'Ooooops! something went wrong...'})
    }
   
})



module.exports = router