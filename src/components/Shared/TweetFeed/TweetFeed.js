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
  tweets: Proptypes.arrayOf(Proptypes.shape({
    name: Proptypes.string.isRequired,
    handlerName: Proptypes.string.isRequired,
    message: Proptypes.string.isRequired,
    date: Proptypes.any.isRequired
  })).isRequired,
  hasTweetInput: Proptypes.bool.isRequired
}


export default tweetFeed;
