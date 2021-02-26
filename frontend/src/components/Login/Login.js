import React, { Component } from "react";
import { connect } from "react-redux";

import { login } from "../../actions/user";
import { validateLima } from "../../helpers/validation";
import "./Login.scss";

export class Login extends Component {
  state = {
    form: {
      email: "",
      password: "",
    },
    errors: {},
    loading: false,
    message: "",
    newRole: "",
  };

  static getDerivedStateFromProps(props) {
    const eeee = props && props.errors;
    // const newError = eeee && eeee.error;
    const newError = eeee;
    const { profile } = props;
    const { userType } = profile;
    const result = userType;
    // const result2 =
    //   result &&
    //   result.map((obj) => {
    //     return obj.authority;
    //   });

    if (newError){
      console.log('newError ==> ', newError);
    }

    if (result && result === 'adminUser') {
      props.history.push("/product");
    }

    if (result && result === 'sellerUser') {
      props.history.push("/product");
    }

    return {
      newRole: result,
    };
  }

  handleChange = (e) => {
    const { form, errors } = this.state;
    this.setState({
      form: { ...form, [e.target.name]: e.target.value },
      errors: { ...errors, [e.target.name]: null },
      loading: false,
      message: "",
    });
  };

  handeleSubmit = (e) => {
    e.preventDefault();
    const { form, errors } = this.state;
    const { login } = this.props;
    const { ...formData } = form;
    const formErrors = validateLima(form, "loginUser");

    this.setState({ errors: { ...errors, ...formErrors } });

    if (!Object.keys(formErrors).length) {
      login(formData);
    }
  };

  render() {
    const { loading, profile } = this.props;
    const { form, errors } = this.state;
    return (
      <div className="container">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" />
          </div>

          <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" />
          </div>

          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({
  user: {
    loginUser: { errors, message, loading },
    profile,
  },
}) => ({
  errors,
  message,
  loading,
  profile,
});

export default connect(mapStateToProps, { login })(Login);
