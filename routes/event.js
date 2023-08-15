const express = require('express');
const router = express.Router();


//@route    localhost:5000/api/event
//@method   GET
//@access   Public

router.get('/event', (req, res) => {
    res.send('hello event')
})

module.exports = router;
