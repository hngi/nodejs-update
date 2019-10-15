const express=require ('express');
const loginUser = require('../controller/Login');
const registerUser = require('../controller/register');
const router = express.Router();

router.get("/home", (req, res) => {
  res.send("something nicepppp");
});



router.post('/login', loginUser);
router.post('/signup', registerUser )

module.exports=router;
