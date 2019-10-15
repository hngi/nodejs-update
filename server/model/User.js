const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
// schemas and model will be created below this line



// schemas and model will be created above this line
function validateUser(user) {
    const schema = {
      username: Joi.string().min(5).max(50).required(),
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(1029).required()
    };
  
    return Joi.validate(user, schema);
  }

//exports below this line 
exports.validate = validateUser;
