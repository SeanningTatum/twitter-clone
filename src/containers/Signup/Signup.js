import React, { Component } from 'react';
import Input from 'components/UI/FormControl/FormControl';

export class Signup extends Component {
  state = {
    name: '',
    username: '',
    email: '',
    password: ''
  }

  render() {
    return (
      <div className="container">
        <form>
          <Input type="input" placeholder={"Email"} label={"username"}/>
        </form>
      </div>
    )
  }
}

export default Signup;
