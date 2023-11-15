const express = require('express');
const router = express.Router({mergeParams: true});
const cors = require('cors');
const { checkJwt, checkRole } = require('../controllers/auth')


const corsOptions = {
    origin: ["http://localhost:3000", "https://alphaefficacy-clementnduonyi.vercel.app"],
    optionsSuccessStatus: 200 
}


const { getBlogs,
        getBlog,
        getBlogBySlug,
        createBlog,
        updateBlog,
        getBlogsByAuthor,
        } = require('../controllers/blogs');

router.get('', cors(corsOptions), getBlogs)
router.get('/me', checkJwt, checkRole('admin'), getBlogsByAuthor)
router.get('/:id', getBlog)
router.get('/s/:slug', getBlogBySlug)






router.post('',checkJwt, checkRole('admin'), createBlog )
router.patch('/:id', checkJwt, checkRole('admin'), updateBlog);




module.exports = router;