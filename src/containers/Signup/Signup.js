import React, { Component } from 'react';
import FormControl from 'components/UI/FormControl/FormControl';

export class Signup extends Component {
  state = {
    name: '',
    username: '',
    email: '',
    password: ''
  }

  render() {
    return (
      <div className="container mt-5">
        <form className="col-md-7 mx-auto">
          <FormControl type="input" placeholder={"Email"} label={"Email"}/>
          <FormControl type="input" placeholder={"Username"} label={"Username"}/>
          <FormControl type="input" placeholder={"Full Name"} label={"Full Name"}/>
          <FormControl type="password" placeholder={"Password"} label={"Password"}/>
          <div className="text-right">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup;
