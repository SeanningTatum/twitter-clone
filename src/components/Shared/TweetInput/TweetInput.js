import React from 'react'
import Proptypes from 'prop-types';

const tweetInput = (props) => {
  return (
    <div className="card bg-light p-2">
      <div className="row mt-2">
        <div className="col-md-2">
          img
        </div>
        <div className="col-md-10">
          <div className="form-group">
            <textarea className="form-control" placeholder="What's Happening?" rows="3"></textarea>
          </div>
          <div className="text-right mr-2">
            <button className="btn btn-success" onClick={props.clicked}>Tweet</button>
          </div>
        </div>
      </div>
    </div>
  )
}

tweetInput.propTypes = {
  clicked: Proptypes.func.isRequired
}


export default tweetInput
