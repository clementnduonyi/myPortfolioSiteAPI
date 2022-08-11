
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
   slug: {type: String, unique: true, sparse: true},
   title: {type: String, required: true, maxlength: 96},
   subTitle: {type: String, required: true},
   body: {type: String, required: true},
   image: {type: Schema.Types.ObjectId, ref: 'Image'},
   category: {type: Schema.Types.ObjectId, ref: 'Category'},
   userId: {type: String, required: true},
   status: {type: String, default: 'draft', enum: ['draft', 'published', 'deleted']},
   createdAt: {type: Date, default: Date.now },
   updateddAt: {type: Date, default: Date.now }
})

module.exports = mongoose.model('Blog', blogSchema);