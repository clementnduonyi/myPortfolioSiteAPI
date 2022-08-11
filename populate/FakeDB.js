
const { projects, blogs, images } = require('./data');
const Project = require('../db/models/project');
const Blog = require('../db/models/blog')
const Image = require('../db/models/image');




class fakeDB {
    async clean(){
        await Image.deleteMany({});
        await Project.deleteMany({});
        await Blog.deleteMany({});
    }

   async addData(){
        await Image.create(images)
        await Project.create(projects)
        await Blog.create(blogs)
    }

    async populate(){
       await this.clean()
       await this.addData()
       
    }
}

module.exports = new fakeDB();