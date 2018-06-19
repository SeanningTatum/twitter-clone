import React from 'react';

const profileCard = () => {
  return (
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">User name</h5>
        <div className="row">
          <div className="col-4">
            <p className="small">Tweets</p>
            <p>256</p>
          </div>
          <div className="col-4">
            <p className="small">Follwers</p>
            <p>256</p>
          </div>
          <div className="col-4">
            <p className="small">Following</p>
            <p>256</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default profileCard;
