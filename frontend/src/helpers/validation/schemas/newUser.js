import Joi from 'joi-browser';

export default Joi.object().keys({
    email: Joi.string()
        .email({ minDomainAtoms: 2 }),
    firstName: Joi.string()
        .min(3)
        .max(45)
        .required()
        .label('firstName'),
    lastName: Joi.string()
        .min(3)
        .max(45)
        .required()
        .label('lastName'),
    phone: Joi.string()
        .required()
        .label('Phone'),
    username: Joi.string()
        .min(8)
        .max(100)
        .required(),
    password: Joi.string()
        .min(8)
        .max(100)
        .required(),
    uerType: Joi.string()
        .min(3)
        .max(45)
        .required()
        .label('userType'),
});
