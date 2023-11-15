const mongoose = require('mongoose')
const Blog = mongoose.model('Blog')
const Category = mongoose.model('Category')
const slugify = require('slugify')
const uniqueSlug = require('unique-slug')
const { getAccessToken, getAuth0User } = require('./auth')



exports.getBlogs = async (req, res) =>{
    const { search } = req.query;
    let blogs;
    if (search) { // If search exists, the user typed in the search bar
        blogs = await Blog.find({status: "published"}).aggregate(
          [
            {
              '$search': {
                'index': 'blogSearch', 
                'autocomplete': {
                  'query': search, // noticed we assign a dynamic value to "query"
                  'path': 'title',
                }
              }
            }, {
              '$limit': 6
            }, {
                "$lookup" : {
                    from: "image",
                    localField: "image",
                    foreignField: "url",
                    as: "image"
                }
            },{
                "$lookup" : {
                    from: "category",
                    localField: "category",
                    foreignField: "name",
                    as: "category"
                }
            },{
              '$project': {
                '_id': 1, 
                'title': 1,
                'subTitle': 1, 
                'author': 1,
                'image': 1,
                'category': 1,
                'status': 1,
                'slug': 1,
                'createdAt': 1,
              }
            }
          ]
        )
        

    }else { // The search is empty so the value of "search" is undefined
        blogs = await Blog.find({status: "published"}).sort({createdAt: -1})
        .populate('image')
        .populate('category');
    }
    
    const { access_token } = await getAccessToken()
    const blogsWithUsers = [];
    const authors = {};
    for(let blog of blogs){
        const author = authors[blog.userId] || await getAuth0User(access_token, blog.userId)
        authors[author.user_id] = author
        blogsWithUsers.push({blog, author})
    }

    return res.json(blogsWithUsers);
}


exports.getBlog = async (req, res) =>{
    const blog = await Blog.findById(req.params.id)
    .populate('image')
    .populate('comments');
    return res.json(blog)
}

exports.getBlogsByAuthor = async (req, res) => {
    const userId = req.auth.sub;
    const blog = await Blog.find({
        userId,
        status: { $in: ['draft', 'published'] }
    }).populate('image');
    return res.json(blog)
}

exports.getBlogBySlug = async (req, res) =>{
    const slug = req.params.slug
    const blog = await Blog.findOne({slug: slug})
    .populate('image')
    .populate('comments');

    const relatedblogs = await Blog.find({category: blog.category, slug: {$ne: blog.slug}})
    const { access_token } = await getAccessToken();
    const author = await getAuth0User(access_token, blog.userId);
   
    return res.json({blog, author, blogs: relatedblogs});
}

exports.createBlog = async (req, res) => {
    const blogBody = req.body;
    blogBody.userId = req.auth.sub;
    const blog = new Blog(blogBody);
    try{
        createdBlog = await blog.save();
        return res.json(createdBlog);

    }catch(e){
        return res.status(422).send(e.message)
    }
}

const _saveBlog = async blog => {
    try{
        const createdBlog = await blog.save()
        return createdBlog;
    }catch(e){
        if(e.code === 11000 && e.keyPattern && e.keyPattern.slug){
            blog.slug += `-${uniqueSlug()}`
            return _saveBlog(blog)
        }
        throw(e)
    }
}

exports.updateBlog = async (req, res) =>{
    const {body, params: {id}} = req;

    Blog.findById(id, async (err, blog) => {
        if(err){
            return res.status(422).send(err.message);
        }
       if(body.status === "published" && !blog.slug){
           blog.slug = slugify(blog.title, {
            replacement: '-',  // replace spaces with replacement character, defaults to `-`
            lower: true,      // convert to lower case, defaults to `false`
          })
       }

       blog.set(body)
       blog.createdAt = new Date();
       try{
            const updatedBlog = await _saveBlog(blog);
            return res.json(updatedBlog)
        }catch(error){
            return res.status(422).send(error.message)
        }
    })
}


exports.addComment = async (req, res) => {
    try{
        const { slug } = req.params;
        const {commentBody} = req.body;
        commentBody.userId = req.auth.sub

        if (userId != req.auth._id){
            return res.status(400).send("Unauthorized")
        }

        const addedComment = await Blog.findOneAndUpdate({slug}, {
            $push: {comments: {commentBody}}
        }, 
        {new: true}
        )
        .populate("author", "_id, name")
        .exec()

        res.json(addedComment);
    }catch(err){
        console.log(err)
        return res.status(400).send('Add lesson failed')
    }
}


