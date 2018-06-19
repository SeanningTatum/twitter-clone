import React from 'react'
import Tweets from './Tweets/Tweets';

const tweetFeed = () => {
  const tweets = [1,2];

  return (
    <div classNameName="list-group">
      <a className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="row">
          <Tweets tweets={tweets}/> 
        </div> {/* ROW */}
      </a>
    </div>
  )
}

export default tweetFeed;
