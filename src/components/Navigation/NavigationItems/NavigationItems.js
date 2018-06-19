import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
  return (
    <React.Fragment>
      <ul className="nav">
        <NavigationItem name={"Home"}/>
        <NavigationItem name={"Notifications"}/>
        <NavigationItem name={"Messages"}/>
      </ul>
    </React.Fragment>
  )
}

export default navigationItems;
