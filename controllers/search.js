const mongoose = require('mongoose')
const Blog = mongoose.model('Blog')




exports.searchBlogPosts = async (req, res) => {
    const query = req.query.toString();
   
    try{
        const blogs = await Blog.find({
            $or: [
                {title: {$regex: query, $options: 'i'}},
                {body: {$regex: query, $options: 'i'}}
            ]
        });
        res.json(blogs);
    }catch(err) {
        res.status(500).json({err: err.message})
        }
}

exports.paginate = async (req, res, next) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const blogs = await Blog.find({ ...req.query })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .sort({ createdAt: -1 })
        const count = await Blog.countDocuments();

        return res.status(200).json({
            blogs,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
        });
    } catch (err) {
        next(err);
    }
};

