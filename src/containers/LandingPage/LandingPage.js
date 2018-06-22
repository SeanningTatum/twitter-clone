import React, { Component } from 'react'

export class LandingPage extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  navigate = () => {
    this.props.history.push('/signup');
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary">Log in</button>
        <button onClick={this.navigate} className="btn btn-primary">Sign up</button>
      </div>
    )
  }
}

export default LandingPage
