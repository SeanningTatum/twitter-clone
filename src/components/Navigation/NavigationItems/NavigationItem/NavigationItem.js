import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => {
  return (
    <li className="nav-item">
      <NavLink 
        to={props.name.toLowerCase()} 
        className="nav-link"
        activeClassName='active'>{props.name}</NavLink>
    </li>
  )
}

navigationItem.propTypes = {
  name: [PropTypes.string, PropTypes.element.isRequired]
}

export default navigationItem;


