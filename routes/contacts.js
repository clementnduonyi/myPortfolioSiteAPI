const express = require('express');
const cors = require('cors');
const router = express.Router();
const { checkJwt } = require('../controllers/auth')




const corsOptions = {
       origin: ["http://localhost:3000", "https://alphaefficacy-clementnduonyi.vercel.app"],
       optionsSuccessStatus: 200 
}

const {contacts} = require('../controllers/contacts')

router.post('', checkJwt, contacts);




module.exports = router;
