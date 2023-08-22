const express = require('express');
const router = express.Router();


const { register } = require('../controllers/auth');

//@route    localhost:5000/api/register
//@method   POST
//@access   Public
router.post('/register', register);


module.exports = router;