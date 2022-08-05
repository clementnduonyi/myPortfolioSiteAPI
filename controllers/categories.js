const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const Blog = mongoose.model('Blog')
const slugify = require('slugify')
const uniqueSlug = require('unique-slug')
const { getAccessToken, getAuth0User } = require('./auth')

exports.getCategories = async (req, res) => {
    const categories = await Category.find({});
    return res.json(categories)
}

exports.getCat = async (req, res) =>{
    const cat = await Category.findById(req.params.id)
    return res.json(cat)
}

exports.getCatBySlug = async (req, res) =>{
    const category = await Category.findOne({slug: req.params.slug}).select('_id name slug')
    const blogs = await Blog.find({ category: {$in: category} }).populate('image')
    const { access_token } = await getAccessToken()
    const blogsWithUsers = [];
    const authors = {};
    for(let blog of blogs){
        const author = authors[blog.userId] || await getAuth0User(access_token, blog.userId)
        authors[author.user_id] = author
        blogsWithUsers.push({blog, author})
    }
    return res.json({blogsWithUsers, category});
    
}


exports.createCategory = async (req, res) =>{
    const categoryData = req.body;
    const category = new Category(categoryData)
    category.slug = slugify(category.name, {
        replacement: '-',  // replace spaces with replacement character, defaults to `-`
        lower: true,      // convert to lower case, defaults to `false`
    })
    try{
        const newCategory = category.save()
        return res.json(newCategory)
    }catch(err){
        return res.status(422).send(err.message)
    }
}


const _saveCat = async cat => {
    try{
        const createdCat = await cat.save()
        return createdCat;
    }catch(e){
        if(e.code === 11000 && e.keyPattern && e.keyPattern.slug){
            cat.slug += `-${uniqueSlug()}`
            return _saveCat(cat)
        }
        throw(e)
    }
    
}

exports.updateCategory = async (req, res) =>{
    const {body, params: {id}} = req;
    try{
        const updatedCategory = 
            await Category.findOneAndUpdate({_id: id}, body, {new: true, runValidators: true})
            return res.json(updatedCategory)
    }catch(error){
        return res.status(422).send(error.message)
    }
}
