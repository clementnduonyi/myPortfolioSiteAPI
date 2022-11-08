const config = require('../config');
const mongoose = require('mongoose');


require('./models/project')
require('./models/blog')
require('./models/image')
require('./models/category')
require('./models/comment')


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
