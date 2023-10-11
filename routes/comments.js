const express = require('express');
const router = express.Router({mergeParams: true});
const { checkJwt, checkRole } = require('../controllers/auth')




const { getComments,
        addComment,
        createReplies,
        updateComment,
        } = require('../controllers/comments');

//router.get('', getComments)
//router.get('/me', checkJwt, checkRole('admin'), getBlogsByAuthor)



router.post("", addComment)


// router.post('/comments/:commentId/replies', createReplies)
//router.patch('/:id', checkJwt, checkRole('admin'), updateComment)



module.exports = router;