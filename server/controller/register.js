
const extractErrors = require('../helpers/helper');
//=======================================================
const mongoose = require('mongoose');
const {User} = require('../models/User');
const {validate} = require('../models/validations')
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs');
const _ = require('lodash');

//=======================================================

const register = async (req, res) => {
//=====================================

const { error } = validate(req.body);
if (error) return res.status(400).json({
    status:"error",
    error: extractErrors((error.details[0].message))
})
//checking if the user already exist 
try {
    let userExist = await User.findOne({ email: req.body.email });
} catch (error) {
    res.status(500).json({
        status:'error',
        error:extractErrors(error)
    })
}
if (userExist) return res.status(400).json({
    status:'error',
    error:'User already exist .'});
//creating user 
var user = new User({
    username: req.body.username ,
    email: req.body.email ,
    password: req.body.password 
})
const salt = await bcrypt.genSalt(10);
req.body.password = await bcrypt.hash(user.password, salt);
    try{
        await user.save();
    }catch(error){
        res.status(500).json({
            status:500,
            error:extractErrors(error)
        });
}

}

module.exports = register;