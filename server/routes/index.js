const express=require ('express');
const loginUser = require('../controller/Login');
const registerUser = require('../controller/register');
const router = express.Router();

router.post('/login', loginUser);
router.post('signup',)

module.exports=router;
