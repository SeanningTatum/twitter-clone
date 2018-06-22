import React from 'react';

const input = (props) => {
   let inputElement = null;

   switch (props.type) {
      case ('input'):
         inputElement = <input 
            className="form-control col-sm-10" 
            value={props.value}
            onChange={props.change}/>;
         break;
   }

   return (
      <div className="form-group row">
         <label className="col-sm-2">{props.label}</label>
         {inputElement}
      </div>
   );
}