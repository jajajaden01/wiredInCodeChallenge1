const checkUser = require('../../helpers/checkUser')();

module.exports = {
    profile: checkUser.profile,
    token: localStorage.token,
    isAuth: checkUser.isAuth,
    createUser: {
        loading: false,
        message: '',
        errors: {}
    },
    loginUser: {
        loading: false,
        message: '',
        errors: {}
    },
};
