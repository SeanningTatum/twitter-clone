import React from 'react';

const formControl = (props) => {
   let inputElement = null;

   switch (props.type) {
      case ('input'):
         inputElement = <input 
            className="form-control" 
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.change}/>;
         break;

      default: inputElement = <input 
         className="form-control" 
         placeholder={props.placeholder}
         value={props.value}
         onChange={props.change}/>;
   }

   return (
      <div className="form-group row">
         <label className="col-sm-2">{props.label}</label>
         <div className="col-sm-10">
            {inputElement}
         </div>
      </div>
   );
}

export default formControl;