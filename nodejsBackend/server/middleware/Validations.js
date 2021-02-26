import Joi from 'joi';

class Validations {
  static userSignup(req, res, next) {
    const schema = Joi.object().keys({
      firstName: Joi.string().max(50).required(),
      lastName: Joi.string().max(50).required(),
      email: Joi.string().email().required(),
      userType: Joi.string().valid('adminUser', 'otherUser').required(),
      phone: Joi.string().required(),
      username: Joi.string().max(50).required(),
      password: Joi.string().min(6).max(50).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      res.status(401).json({
        status: res.statusCode,
        error: error.details[0].message.replace(/"/g, ''),
      });
    }

    next();
  }

  static userSignin(req, res, next) {
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(50).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      res.status(401).json({
        status: res.statusCode,
        error: error.details[0].message.replace(/"/g, ''),
      });
    } else next();
  }

  static validateMessage(req, res, next) {
    const schema = Joi.object().keys({
      to: Joi.string().email().required(),
      subject: Joi.string().required(),
      body: Joi.string().min(1).required(),
    });

    try {
      const { error } = schema.validate(req.body);
      if (error) {
        res.status(400).json({
          status: res.statusCode,
          error: error.details[0].message.replace(/"/g, ''),
        });
      } else next();
    } catch (err) {
      res.status(400).json({
        status: res.statusCode,
        error: err.message,
      });
    }
  }
}

export default Validations;
