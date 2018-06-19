import React from 'react'
import PropTypes from 'prop-types';

const tweet = (props) => {
  return (
    <div className="text-left">
      <p><b>{props.name}</b> @{props.twitterHandler} {props.date}</p>
      <p>{props.message}</p>
    </div>
  )
}

tweet.propTypes = {
  name: PropTypes.string.isRequired,
  twitterHandler: PropTypes.string.isRequired, 
  date: PropTypes.any.isRequired, 
  message: PropTypes.string.isRequired
}

export default tweet