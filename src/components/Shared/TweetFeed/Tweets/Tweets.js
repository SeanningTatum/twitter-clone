import React from 'react';
import Tweet from './Tweet/Tweet';
import PropTypes from 'prop-types';

const tweets = (props) => {
  return (
    props.tweets.map( (tweet, ndx) => (
      <div className="list-group-item m-0" key={ndx}>
        <div className="row">
          <div className="col-1">
            img
          </div>
          <div className="col-11">
            <Tweet 
              name={tweet.name}
              twitterHandler={tweet.handlerName}
              date={tweet.date}
              message={tweet.message}/>
          </div>
        </div>
      </div>
    ))
  )
}

tweets.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    handlerName: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    date: PropTypes.any.isRequired
  })).isRequired
}

export default tweets
