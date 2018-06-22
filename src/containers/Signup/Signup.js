import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from 'store/actions/index';
import FormControl from 'components/UI/FormControl/FormControl';

export class Signup extends Component {
  state = {
    name: '',
    username: '',
    email: '',
    password: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSignUp({
        email: this.state.email,
        name: this.state.name,
        handle: this.state.username,
        password: this.state.password
      });
  }

  onChangeInput = async (inputName, event) => {
    await this.setState({[inputName]: event.target.value});
    console.log(this.state)
  }

  render() {
    return (
      <div className="container mt-5">
        <form className="col-md-7 mx-auto">
          <FormControl 
            type="input" 
            change={this.onChangeInput} 
            placeholder={"Email"} 
            label={"Email"}/>
          <FormControl 
            type="input" 
            change={this.onChangeInput} 
            placeholder={"Username"} 
            label={"Username"}/>
          <FormControl 
            type="input" 
            change={this.onChangeInput} 
            placeholder={"Name"} 
            label={"Full Name"}/>
          <FormControl 
            type="password" 
            change={this.onChangeInput} 
            placeholder={"Password"} 
            label={"Password"}/>
          <div className="text-right">
            <button 
              className="btn btn-primary"
              onClick={(event) => this.onSubmit(event)}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  onSignUp: (user) => dispatch(authActions.onSignUp(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
