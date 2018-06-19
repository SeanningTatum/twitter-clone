import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';

const navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <NavigationItems />
      </div>
    </nav>
  )
}

export default navbar;

