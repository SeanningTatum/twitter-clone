import React from 'react'
import PropTypes from 'prop-types';

const tweet = (props) => {
  return (
    <div className="text-left">
      <p><b>{props.name}</b> @{props.twitterHandler} {props.date}</p>
      <p>{props.tweet}</p>
    </div>
  )
}

tweet.propTypes = {
   name: PropTypes.string.isRequired,
   twitterHandler: PropTypes.string.isRequired, 
   date: PropTypes.string.isRequired, 
   tweet: PropTypes.string.isRequired
}

export default tweet