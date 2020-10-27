import React from 'react';

function Button(props) {
  console.log(props);
  return (
  <button style={props.style}>{props.name}</button>
  );
}

export default Button;