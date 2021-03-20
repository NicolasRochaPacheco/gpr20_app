import React from 'react';

function Button(props) {

  return (
    <button
      disabled={props.disabled}
      className={props.btnClass} 
      onClick={props.onClick} 
    >
      {props.label}
    </button>
  );
}

export default Button;
