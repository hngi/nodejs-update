const router = require('express').Router()
const mongoose = require('mongoose');
const {User} = require('../model/User')
const {validate} = require('../model/validations')
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
    try {
        let user = await User.fineOne({ email: req.body.email });
    } catch (error) {
        res.status(500).send(error);
    }
    if (user) return res.status(400).send('User already exist .');
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
    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(user, ['username', 'email']));
});

module.exports = router;
