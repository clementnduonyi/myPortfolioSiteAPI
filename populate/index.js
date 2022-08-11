
const config = require('../config');
const mongoose = require('mongoose');

const fakeDB = require('./fakeDB')




mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, async (err)=>{
    if(err){
        console.error(err)
    }else{
        console.log('> Populating DB in progress...')
        await fakeDB.populate();
        await mongoose.connection.close();
        console.log("> DB populated!");
    }
    
})
    

