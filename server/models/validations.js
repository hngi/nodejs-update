const Joi = require('@hapi/joi');


function validateUser(user) {
    const schema = Joi.object({
      username: Joi.string().min(5).max(50).required(),
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(1029).required()
    });
  
  return  schema.validate(user);
   
  }

//exports below this line 
exports.validate = validateUser;