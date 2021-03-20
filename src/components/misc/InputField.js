import React from 'react';

function InputField(props) {
  
  // Returns input field
  return (
    <div className={props.divClass}>
      <label className={props.labelClass}>{props.label}</label>
      <input disabled={props.disabled} className={props.inputClass} type={props.type} onChange={props.onChange} />
    </div>
  );
}

export default InputField;
