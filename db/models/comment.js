const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    content: {type: String, required: true},
    replies: [],
    author: '',
    // userId: {type: String, required: true},
},
{timestamps: true}
)



module.exports = mongoose.model('Comment', commentSchema)

