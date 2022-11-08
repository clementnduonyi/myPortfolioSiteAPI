const express = require('express');
const router = express.Router();
const { checkJwt, checkRole } = require('../controllers/auth')




const { getComments,
        createComment,
        updateComment,
        } = require('../controllers/comments');

router.get('', getComments)
//router.get('/me', checkJwt, checkRole('admin'), getBlogsByAuthor)



router.post('', checkJwt, createComment)
//router.patch('/:id', checkJwt, checkRole('admin'), updateComment)



module.exports = router;