
const { projects, blogs, bImages, pImages } = require('./data');
const Project = require('../db/models/project');
const Blog = require('../db/models/blog')
const BlogImage = require('../db/models/blogImage');
const ProjectImage = require('../db/models/projectImage');



class fakeDB {
    async clean(){
        await ProjectImage.deleteMany({});
        await BlogImage.deleteMany({});
        await Project.deleteMany({});
        await Blog.deleteMany({});
    }

   async addData(){
        await ProjectImage.create(pImages)
        await BlogImage.create(bImages)
        await Project.create(projects)
        await Blog.create(blogs)
    }

    async populate(){
       await this.clean()
       await this.addData(projects)

    }
}

module.exports = new fakeDB();