const router = require('express').Router()
const mongoose = require('mongoose');
const {User} = require('../models/User')
const {validate} = require('../models/validations')
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs');
const _ = require('lodash');

router.get("/signup", (req, res) => {
  res.send(validate(user))
});

router.post('/signup', async (req, res) => {
    //validating the user's input
    const { error } = validate(req.body);
    if (error) return res.status(400).send((error.details[0].message));
    //checking if the user already exist 
    let userhere = await User.findOne({ email: req.body.email });
    if (userhere) return res.status(400)
    //creating user 
    var user = new User({
        username: req.body.username ,
        email: req.body.email ,
        password: req.body.password 
    })
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(user.password, salt);
    await user.save();
 
    //adding Jwt 
    // jwt.sign({ user }, "screct-key", (err, token) => {
    //     console.log("Token genetarted for " + token)
    // });
    // res.header('x-auth-token', token).send(_.pick(user, ['username', 'email']));
    const token = jwt.sign({_id:user._id} , 'secret')
    res.header('x-auth-token', token).send(_.pick(user, ['username', 'email']));
});

module.exports = router;
