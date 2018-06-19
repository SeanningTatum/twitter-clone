import React from 'react';
import Tweet from './Tweet/Tweet';

const tweets = ({tweets}) => {

  return (
    tweets.map( (tweet) => (
      <div className="list-group-item m-0" key={tweet}>
        <div className="row">
          <div className="col-1">
            img
          </div>
          <div className="col-11">
            <Tweet 
              name={"Sean Urgel"}
              twitterHandler={"mrseanurgel"}
              date={"10/10/1998"}
              tweet={"Making a project to impress employers hehe please accept me"}/>
          </div>
        </div>
      </div>
    ))
  )
}

export default tweets
