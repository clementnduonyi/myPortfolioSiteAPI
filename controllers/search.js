const mongoose = require('mongoose')
const Blog = mongoose.model('Blog')




exports.searchBlogPosts = async (req, res) => {
   
    const { search } = req.query;
    const blogs = await Blog.aggregate(
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
            '$project': {
              '_id': 1, 
              'title': 1, 
              'author': 1,
              'image': 1,
              'category': 1, 
              'createdAt': 1,
             
            }
          }
        ]
    )
    const { access_token } = await getAccessToken()
    const searchResults = [];
    const authors = {};
    for(let blog of blogs){
        const author = authors[blog.userId] || await getAuth0User(access_token, blog.userId)
        authors[author.user_id] = author
        searchResults.push({blog, author})
    }

    return res.json(searchResults);
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

