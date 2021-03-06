import Joi from 'joi-browser';

export default Joi.object().keys({
    email: Joi.string()
        .email({ minDomainAtoms: 2 }),
    password: Joi.string()
        .min(8)
        .max(100)
        .required(),
});
