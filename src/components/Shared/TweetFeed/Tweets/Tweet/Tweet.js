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
   name: [PropTypes.string, PropTypes.element.isRequired],
   twitterHandler: [PropTypes.string, PropTypes.element.isRequired],
   date: [PropTypes.string, PropTypes.element.isRequired],
   tweet: [PropTypes.string, PropTypes.element.isRequired]
}

export default tweet