import React from 'react';

const Button = ({ children, className, onClickHandler }) => {
  <button 
    type="button"
    onClick={onClickHandler}
    className={className}
  >
    {children}
  </button>
}

export default Button;