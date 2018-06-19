import React from 'react';
import Proptypes from 'prop-types';
import Tweets from './Tweets/Tweets';
import TweetInput from '../TweetInput/TweetInput';

const tweetFeed = (props) => {

  const tweetInput = props.hasTweetInput
    ? <TweetInput />
    : null

  return (
    <React.Fragment>
      {tweetInput}
      <div className="list-group">
        <Tweets tweets={props.tweets}/> 
      </div>
    </React.Fragment>
  )
}

tweetFeed.propTypes = {
  tweets: Proptypes.element.isRequired,
  hasTweetInput: [Proptypes.element.isRequired, Proptypes.bool]
}


export default tweetFeed;
