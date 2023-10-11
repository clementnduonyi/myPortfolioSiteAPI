const mongoose = require('mongoose')
const Comment = mongoose.model('Comment')

const Blog = mongoose.model('Blog')
const slugify = require('slugify')
const uniqueSlug = require('unique-slug')
const { getAccessToken, getAuth0User } = require('./auth')




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



