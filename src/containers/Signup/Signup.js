import React, { Component } from 'react';

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
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input 
              type="password" 
              className="form-control" 
              id="inputPassword" 
              placeholder="Password" />
          </div>
        </div>
      </form>
    )
  }
}

export default Signup;
