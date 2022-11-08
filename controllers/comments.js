const mongoose = require('mongoose')
const Comment = mongoose.model('Comment')
const Blog = mongoose.model('Blog')
const slugify = require('slugify')
const uniqueSlug = require('unique-slug')
const { getAccessToken, getAuth0User } = require('./auth')


exports.getComments = async (req, res) =>{
    const comments = await Comment.find().sort({createdAt: -1});
    
    const { access_token } = await getAccessToken()
    const commentsWithUsers = [];
    const commentAuthors = {};
    for(let comment of comments){
        const commentAuthor = commentAuthors[comment.userId] || await getAuth0User(access_token, comment.userId)
        commentAuthors[commentAuthor.user_id] = commentAuthor
        commentsWithUsers.push({comment, commentAuthor})
    }
    return res.json(commentsWithUsers);
}

exports.createComment = async (req, res) => {
    const commentData = req.body;
    commentData.userId = req.auth.sub;
    const comment = new Comment(commentData);
    const blog = await Blog.findById(req.params.blogId);
    

    try{
        const newComment = await comment.save();
        const commentToBlog = await blog.comments.unshift(newComment);
        const commentedBlog = await commentToBlog.save();
        console.log("Comment created successfully!")

        return res.json(commentedBlog);
    }catch(err){
        return res.status(422).send(err.message)
    }
}