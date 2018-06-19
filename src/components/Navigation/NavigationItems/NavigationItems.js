import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
  return (
    <ul className="nav">
      <NavigationItem name={"Home"}/>
      <NavigationItem name={"Notifications"}/>
      <NavigationItem name={"Messages"}/>
    </ul>
  )
}

export default navigationItems;
