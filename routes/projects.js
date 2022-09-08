const express = require('express');
const router = express.Router();
const cors = require('cors');

const { checkJwt, checkRole } = require('../controllers/auth')

const corsOptions = {
    origin: 'https://clementnduonyi.com',
    optionsSuccessStatus: 200 
}



const { getProjects,
        getProject, 
        createProject,
        updateProject,
        deleteProject} = require('../controllers/projects');

router.get('', cors(corsOptions), getProjects)
router.get('/:id', getProject)

router.post('', checkJwt, checkRole('admin'), createProject)

router.patch('/:id', checkJwt, checkRole('admin'), updateProject)
router.delete('/:id', checkJwt, checkRole('admin'), deleteProject)

module.exports = router;