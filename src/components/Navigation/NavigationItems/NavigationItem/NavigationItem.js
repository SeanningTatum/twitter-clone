import React from 'react';
import PropTypes from 'prop-types';

const navigationItem = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-link">{props.name}</a>
    </li>
  )
}

navigationItem.propTypes = {
  name: [PropTypes.string, PropTypes.element.isRequired]
}

export default navigationItem;


