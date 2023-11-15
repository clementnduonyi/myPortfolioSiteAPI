const express = require('express');
const cors = require('cors');
const router = express.Router()



const corsOptions = {
       origin: ["http://localhost:3000", "https://alphaefficacy-clementnduonyi.vercel.app"],
       optionsSuccessStatus: 200 
}

const {searchBlogPosts} = require('../controllers/search')

router.get('/search', cors(corsOptions), searchBlogPosts);




module.exports = router;
