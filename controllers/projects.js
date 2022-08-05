
const mongoose = require('mongoose');
const Project = mongoose.model('Project');


exports.getProjects = async (req, res) => {
    const projects = await Project.find({})
        .populate('image')
    return res.json(projects);
}

exports.getProject = async (req, res) => {
    try{
        const project = await Project.findById(req.params.id).populate('image')
        return res.json(project);
    }catch(error){
        return res.status(422).send(error.message)
    }
    
}

exports.createProject = async (req, res) => {
    const projectData = req.body;
    const userId = req.auth.sub;
    const project = new Project(projectData);
    project.userId = userId;
    try{
        const newProject = await project.save()
        return res.json(newProject)
    }catch(error){
        return res.status(422).send(error.message)
    }
    
}

exports.updateProject = async (req, res) =>{
    const {body, params: {id}} = req;
    try{
        const updatedProject = 
            await Project.findOneAndUpdate({_id: id}, body, {new: true, runValidators: true}).populate('image');
            return res.json(updatedProject)
    }catch(error){
        return res.status(422).send(error.message)
    }
}

exports.deleteProject = async (req, res) =>{
    const project = await Project.findOneAndRemove({_id: req.params.id})
    return res.json({_id: project.id})
}





