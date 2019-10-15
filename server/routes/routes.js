const express = require('express');
const loginUser = require('../controller/login.js')

const router = express.Router();

// router.use('/auth', auth);

router.post('/api/v1/login', function (req, res) {
  loginUser
})

module.exports = router;