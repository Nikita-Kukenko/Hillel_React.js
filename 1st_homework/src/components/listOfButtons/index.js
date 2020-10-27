import React from 'react';
import Button from './button.js';

let errorButton = {
  color: 'red',
  fontSize: '12px',
  width: '200px',
  height: '60px',
  backgroundColor: 'transparent',
  border: '3px solid red',
  margin: '0 20px 0 0',
  borderRadius: '5px',
  fontWeight: '700',
}

let defaultButton = {
  color: 'blue',
  fontSize: '12px',
  width: '200px',
  height: '60px',
  backgroundColor: 'transparent',
  border: '3px solid blue',
  margin: '0 20px 0 0',
  borderRadius: '5px',
  fontWeight: '700',
}

let successButton = {
color: 'green',
fontSize: '12px',
width: '200px',
height: '60px',
backgroundColor: 'transparent',
border: '3px solid green',
margin: '0 20px 0 0',
borderRadius: '5px',
fontWeight: '700',
}

function ListOfButtons() {
  return (
    <div>
      <Button style={defaultButton} name='Default' />
      <Button style={errorButton} name='Error'/>
      <Button style={successButton} name='Success'/>
    </div>
  );
}

export default ListOfButtons;