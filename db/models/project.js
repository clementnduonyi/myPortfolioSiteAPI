
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectSchema = new Schema({
    title: {type: String, required: true, maxlength: 128 },
    description: { type: String, required: true },
    image: {type: Schema.Types.ObjectId, ref: 'Image'},
    technologies: { type: Array, required: true, default: [] },
    role_description: { type: String, required: true },
    projectUrl: {type: String, required: true, maxlength: 128},
    userId: { type: String, required: true},
    createdAt: {type: Date, default: Date.now },
    updateddAt: {type: Date, default: Date.now }
})

module.exports = mongoose.model('Project', projectSchema);