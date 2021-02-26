import User from '../models/User';
import UserToken from '../helpers/UserToken';
import Helper from '../helpers/theHelper';

class UserController {
  static async signup(req, res) {
    try {
      const { email } = req.body;

      const userExist = await User.getUserByEmail(email);

      if (userExist[0]) {
        return res.status(409).json({
          status: res.statusCode,
          error: `Sorry! User with this (${email}) email, already exists.`,
        });
      }

      req.body.createdDate = Helper.currentDate();
      const isSaved = await User.saveUser(req.body);

      const token = UserToken.generateToken({
        id: isSaved.id, email, userType: isSaved.usertype, loggedIn: false,
      });
      return res.status(201).json({
        status: res.statusCode,
        message: 'User created successfully.',
        data: {
          token,
          userDetails: {
            firstName: isSaved.firstname,
            lastName: isSaved.lastname,
            email: isSaved.email,
            userType: isSaved.usertype,
            phone: isSaved.phone,
          },
        },
      });
    } catch (err) {
      return res.status(500).json({
        status: res.statusCode,
        error: err.message,
      });
    }
  }

  static async signin(req, res) {
    try {
      const userExist = await User.checkUser(req.body);

      if (!userExist) {
        return res.status(401).json({ status: res.statusCode, error: 'Incorrect Email or Password' });
      }

      const token = UserToken.generateToken({
        id: userExist.id,
        firstName: userExist.firstname,
        lastName: userExist.lastname,
        email: userExist.email,
        userType: userExist.usertype,
        loggedIn: true,
      });

      return res.status(200).header('token', token).json({
        status: res.statusCode,
        message: 'User is successfully logged in',
        data: {
          token,
          firstName: userExist.firstname,
          lastName: userExist.lastname,
          email: userExist.email,
          userType: userExist.usertype,
          phone: userExist.phone,
        },
      });
    } catch (error) {
      return res.status(500).json({
        status: res.statusCode,
        error: error.message,
      });
    }
  }
}

export default UserController;
