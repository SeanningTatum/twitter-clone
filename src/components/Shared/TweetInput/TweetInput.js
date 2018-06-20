import React, { Component } from 'react'
import Proptypes from 'prop-types'

export default class TweetInput extends Component {
  static propTypes = {
    clicked: Proptypes.func.isRequired
  }

  state = {
    tweet: '',
    rowSize: 1
  }

  changeTextAreaSize = (size) => {
    if (this.state.tweet.length == 0) {
      this.setState({rowSize: size});
    }
  }

  handleChange = (event) => {
    this.setState({tweet: event.target.value});
  }

  submitTweet = async () => {
    this.props.clicked(this.state.tweet);
    await this.setState({tweet: ''});
    this.changeTextAreaSize(1);
  }

  render() {
    return (
      <div className="card bg-light p-2">
        <div className="row mt-2">
          <div className="col-md-2">
            img
          </div>
          <div className="col-md-10">
            <div className="form-group">
              <textarea 
                className="form-control" 
                placeholder="What's Happening?" 
                value={this.state.tweet}
                onChange={(event) => this.handleChange(event)} 
                onBlur={() => this.changeTextAreaSize(1)}
                onFocus={() => this.changeTextAreaSize(3)}
                rows={this.state.rowSize}></textarea>
            </div>
            <div className="text-right mr-2">
              <button className="btn btn-success" onClick={this.submitTweet}>Tweet</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


 
