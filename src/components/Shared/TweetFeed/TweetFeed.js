import React from 'react'
import Tweets from './Tweets/Tweet';

const tweetFeed = () => {
  return (
    <div classNameName="list-group">
      <a className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="row">
          <div className="col-1">
            img
          </div>
          <div className="col-11">
            <Tweets />
          </div> 
        </div> {/* ROW */}
      </a>
    </div>
  )
}

export default tweetFeed;
