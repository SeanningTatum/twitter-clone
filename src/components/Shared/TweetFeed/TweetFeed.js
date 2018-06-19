import React from 'react'
import Tweets from './Tweets/Tweets';

const tweetFeed = (props) => {

  return (
    <div classNameName="list-group">
      <Tweets tweets={props.tweets}/> 
    </div>
  )
}

export default tweetFeed;
