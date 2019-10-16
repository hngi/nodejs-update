
const {extractErrors} = require('../helpers/helper');
const mongoose = require('mongoose');
const {User} = require('../models/User');
const {validate} = require('../models/User')
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs');
const _ = require('lodash');

const register = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).json({
            status:"error",
            error:error.details[0].message
        });
    //checking if the user already exist 
    let userhere = await User.findOne({ email: req.body.email });
    if (userhere) return res.status(400).json({
        status:"error",
        error: "user already exist"
    })
    //creating user 
    var user = new User({
        username: req.body.username ,
        email: req.body.email ,
        password: req.body.password 
    })
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(user.password, salt);
    await user.save();
    //creating jwt
    const token = jwt.sign({_id:user._id} , 'secret')
    res.header('x-auth-token', token).send(`${user.username} has been created with Token: ${token}`);
}


module.exports = register;