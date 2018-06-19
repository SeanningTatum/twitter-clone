import React, { Component } from 'react';
import ProfileCard from 'components/Home/ProfileCard/ProfileCard';
import TweetFeed from 'components/Shared/TweetFeed/TweetFeed';
 
export class Home extends Component {
  state = {
    tweets: [1,2]
  }

  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <ProfileCard />
          </div>
          <div className="col-md-6">
            <TweetFeed tweets={this.state.tweets}/>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Home;
