const router = require('express').Router()
const { User, validate } = require('../model/User');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

router.post('/', async (req, res) => {
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
        username: req.body.username || 'dan',
        email: req.body.email || "dan@gmail.com",
        password: req.body.password || "password"
    })
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(user.password, salt);
    await user.save();
    
    //adding Jwt 
    jwt.sign({ user }, "screct-key", (err, token) => {
        console.log("Token genetarted for " + token)
    });
    res.header('x-auth-token', token).send(_.pick(user, ['username', 'email']));
});

module.exports = router;
