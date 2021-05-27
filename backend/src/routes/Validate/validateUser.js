const validateUser = {}

const Joi = require('joi')

validateUser.schemaRegister = Joi.object({
          first_name : Joi.string()
                                   .alphanum()
                                   .min(4)
                                   .max(50)
                                   .required(),
          username: Joi.string()
                              .alphanum()
                              .min(4)
                              .max(50)
                              .required(),
          email: Joi.string()
                        .min(6)
                        .max(50)
                        .required()
                        .email(),
          password: Joi.string()
                    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                    //.pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'))   
                     .required()   
          
})