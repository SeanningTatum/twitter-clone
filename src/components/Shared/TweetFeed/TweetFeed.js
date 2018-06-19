import React from 'react';
import Tweets from './Tweets/Tweets';
import TweetInput from '../TweetInput/TweetInput';

const tweetFeed = (props) => {

  const tweetInput = props.hasTweetInput
    ? <TweetInput />
    : null

  return (
    <React.Fragment>
      {tweetInput}
      <div classNameName="list-group">
        <Tweets tweets={props.tweets}/> 
      </div>
    </React.Fragment>
  )
}

export default tweetFeed;
