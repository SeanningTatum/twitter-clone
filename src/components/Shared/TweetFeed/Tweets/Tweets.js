import React from 'react';
import Tweet from './Tweet/Tweet';

const tweets = ({tweets}) => {

  return (
    tweets.map( () => (
      <div className="list-group-item m-0">
        <div className="row">
          <div className="col-1">
            img
          </div>
          <div className="col-11">
            <Tweet/>
          </div>
        </div>
      </div>
    ))
  )
}

export default tweets
