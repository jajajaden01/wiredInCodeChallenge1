import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { create } from "../../../actions/user";
import "../Register.scss";

class UserFirstDetails extends Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      userType: "",
      phone: "",
      username: "",
      password: ""
    },
    errors: {},
    loading: false,
    message: "",
    errorUp: {},
  };

  handleChange = (_, data) => {
    const { form, errors } = this.state;
    this.setState({
      form: { ...form, [data.name]: data.value },
      errors: { ...errors, [data.name]: null },
      loading: false,
      message: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props);
    const { createUser } = this.props;
    const { form } = this.state;
    let { ...formData } = form;

    createUser(formData);
    
    this.setState({
      form: {
        firstName: "",
        lastName: "",
        email: "",
        userType: "",
        phone: "",
        username: "",
        password: ""
      },
      errors: {} });
  };

  static getDerivedStateFromProps = (props) => {
    return {
      errorUp: props.errors,
    };
  };

  render() {
    const { loading } = this.props;
    const { form, errors, errorUp } = this.state;
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="FirstName">FirstName:</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label for="LastName">LastName:</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" className="form-control" />
          </div>

          <div className="form-group">
            <label for="Phone">Phone:</label>
            <input type="number" className="form-control" />
          </div>

          <div className="form-group">
            <label for="sel1">UserType:</label>
            <select className="form-control">
              <option>Select</option>
              <option>Admin User</option>
              <option>Other User</option>
            </select>
          </div>

          <div className="form-group">
            <label for="username">username:</label>
            <input type="text" className="form-control" />
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

UserFirstDetails.propTypes = {
  nextStep: PropTypes.func,
  form: PropTypes.object,
  handleChange: PropTypes.func,
};

const mapStateToProps = ({
  user: {
    createUser: { loading, message, errors },
  },
}) => ({
  loading,
  message,
  errors,
});

const mapDispatchToProps = (dispatch) => ({
  createUser: (payload) => dispatch(create(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserFirstDetails);
