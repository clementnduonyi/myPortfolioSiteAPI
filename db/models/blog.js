
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
   
   content: {type: {}, minlength: 200},
   userId: {type: String, required: true},
},
   { timestamps: true }
);

const blogSchema = new Schema({
   slug: {type: String, unique: true, sparse: true},
   title: {type: String, required: true, maxlength: 96},
   subTitle: {type: String, required: true},
   body: {type: String, required: true},
   image: {type: Schema.Types.ObjectId, ref: 'Image'},
   category: {type: Schema.Types.ObjectId, ref: 'Category'},
   comments: [commentSchema],
   userId: {type: String, required: true},
   status: {type: String, default: 'draft', enum: ['draft', 'published', 'deleted']},
   createdAt: {type: Date, default: Date.now },
   updateddAt: {type: Date, default: Date.now }
});




module.exports = mongoose.model("Blog", blogSchema);