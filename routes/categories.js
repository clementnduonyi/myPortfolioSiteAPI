const express = require('express');
const cors = require('cors');
const router = express.Router()
const { checkJwt, checkRole } = require('../controllers/auth')


const corsOptions = {
       origin: 'https://clementnduonyi.com',
       optionsSuccessStatus: 200 
}

const {getCategories,
       getCat, 
       createCategory,
       getCatBySlug,
       updateCategory } = require('../controllers/categories')

router.get('', cors(corsOptions), getCategories);
router.get('/:id', getCat)
router.get('/s/:slug', getCatBySlug);

router.post('', checkJwt, checkRole('admin'), createCategory)
router.patch('/:id', checkJwt, checkRole('admin'), updateCategory)



module.exports = router;
