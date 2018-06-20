import React, { Component } from 'react';
import ProfileCard from 'components/Home/ProfileCard/ProfileCard';
import TweetFeed from 'components/Shared/TweetFeed/TweetFeed';
 
import { connect } from 'react-redux';
import * as tweetActions from 'store/actions/index';

export class Home extends Component {

  componentDidMount() {
    this.props.onFetchTweets();
  }

  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <ProfileCard />
          </div>
          <div className="col-md-6">
            <TweetFeed 
              hasTweetInput={this.props.addTweetInput}
              tweets={this.props.tweets}
              postTweet={this.props.onPostTweet}/>
          </div>
        </div>   
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tweets: state.tweets,
  addTweetInput: state.addTweetInput
})

const mapDispatchToProps = dispatch => ({
  onFetchTweets: () => dispatch(tweetActions.fetchTweets()),
  onPostTweet: (tweet) => dispatch(tweetActions.onPostTweet(tweet))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
