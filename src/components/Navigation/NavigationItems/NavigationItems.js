import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
   return (
      <React.Fragment>
         <ul className="nav">
            <NavigationItem></NavigationItem>
         </ul>
      </React.Fragment>
   )
}

export default navigationItems;
