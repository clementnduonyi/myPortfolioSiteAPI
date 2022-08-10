const config = require('../config');
const mongoose = require('mongoose');


require('./models/project')
require('./models/blog')
require('./models/blogImage')
require('./models/projectImage')
require('./models/category')


exports.connect = () => {
    mongoose.connect(config.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err)=>{
        if(err){
            console.error(err)
        }else{
            console.log("Connected to DB!")
        }
       
    })
    
}
