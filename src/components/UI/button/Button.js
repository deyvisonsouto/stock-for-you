import React from 'react'

import './Button.css';

function Button(props) {
  return (
    <button onClick={props.clicked} className="button">
      {props.children}
    </button>
  );
}

export default Button;