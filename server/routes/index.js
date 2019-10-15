const express=require ('express');
const validateNewUser = require('../middlewares/newuser');
const router = express.Router();

// router.use('/auth', auth);

router.post('/login', validateNewUser);


module.exports=router;
