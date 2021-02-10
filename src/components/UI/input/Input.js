import React from 'react';

import './Input.css';

function Input(props) {
  
  const getInputType = (inputType, inputOptions, value, changed, required, id) => {
    const inputClasses = [];
    if (required) {
      inputClasses.push('required');
    }
    switch (inputType) {
      case ('select'):
        return (
          <select
            id={id}
            className={inputClasses.join(' ')}
            value={value}
            onChange={changed}>
            {inputOptions.options.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        );
      case ('textarea'):
        return (
          <textarea
            id={id}
            className={inputClasses.join(' ')}

            {...inputOptions}
            onChange={changed}>
            {value}
          </textarea>
        );
      default:
        return (
          <input
            id={id}
            className={inputClasses.join(' ')}

            {...inputOptions}
            onChange={changed}
            value={value} />
        );
    }
  }

  let label = null;
  if (props.label) {
    label = <label htmlFor={props.id}>{props.label}</label>;
  }

  return (
    <div className="input">
      {label}
      {getInputType(props.inputType, props.inputOptions, props.value, props.changed, props.required, props.id)}
    </div>
  );
}

export default Input;