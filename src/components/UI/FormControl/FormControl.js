import React from 'react';

const formControl = (props) => {
   let inputElement = null;
   const changeEvent = (event) => props.change(props.placeholder.toLowerCase(), event);

   switch (props.type) {
      case ('input'):
         inputElement = <input 
            type={props.type}
            className="form-control" 
            placeholder={props.placeholder}
            value={props.value}
            onChange={changeEvent}/>;
         break;

      default: inputElement = <input 
         type={props.type}
         className="form-control" 
         placeholder={props.placeholder}
         value={props.value}
         onChange={changeEvent}/>;
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