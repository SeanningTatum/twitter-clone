import React from 'react'
import Tweets from './Tweets/Tweets';

const tweetFeed = () => {
  const tweets = [1,2];

  return (
    <div classNameName="list-group">
      <Tweets tweets={tweets}/> 
    </div>
  )
}

export default tweetFeed;
