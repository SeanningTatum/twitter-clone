import React from 'react'

const tweet = (props) => {
  return (
    <div className="text-left">
      <p><b>{props.name}</b> @{props.twitterHandler} {props.date}</p>
      <p>{props.tweet}</p>
    </div>
  )
}

export default tweet