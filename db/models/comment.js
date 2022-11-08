const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    userId: {type: String},
    content: {type: String, required: true},
},
{timestamps: true}
)



module.exports = mongoose.model('Comment', commentSchema)

