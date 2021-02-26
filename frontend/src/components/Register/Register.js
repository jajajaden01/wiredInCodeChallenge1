import React, { Component } from 'react';

import UserFirstDetails from './MultiStepForms/UserFirstDetails';
import './Register.scss';

export class Register extends Component {
   render() {
      return (
         <div className="container">
            <h1>Register</h1>
            <UserFirstDetails />
         </div>
      );
   }
}

export default Register;
