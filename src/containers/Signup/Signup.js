import React, { Component } from 'react';
import Input from 'components/UI/Input/Input';

export class Signup extends Component {
  state = {
    name: '',
    username: '',
    email: '',
    password: ''
  }
  render() {
    return (
      <form>
        
      <Input type="input" placeholder={"Email"} label={"username"}/>

      </form>
    )
  }
}

export default Signup;
