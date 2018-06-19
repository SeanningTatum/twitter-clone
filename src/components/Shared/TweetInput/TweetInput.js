import React from 'react'

const tweetInput = () => {
  return (
    <div className="row">
      <div className="col-md-2">
        img
      </div>
      <div className="col-md-10">
        <div className="form-group">
          <textarea className="form-control" placeholder="What's Happening?" rows="3"></textarea>
        </div>
      </div>
    </div>
  )
}



export default tweetInput
