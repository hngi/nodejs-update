const router = require('express').Router()
const {User, validate} = require('../model/User');
const mongoose = require('mongoose');
router.post('/', async (req, res) => {
    //validating the user's input
    const {error} = validate(req.body);
    if (error) return res.status(400).send((error.details[0].message));
    //checking if the user already exist 
    try {
         let user = await User.fineOne({email:req.body.email});
    } catch (error) {
        res.status(500).send(error);
    }
  if (user)  return res.status(400).send('User already exist .');
  //creating user 

  //adding Jwt 

});