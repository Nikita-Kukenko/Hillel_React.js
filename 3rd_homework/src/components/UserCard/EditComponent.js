import React from 'react';

const EditComponent = props => {
  const {
    value,
    toggleValue,
    objValue = '',
    changeNewValue,
    editValue,
    toggleNeedToEditValue, 
    newValue,
    currentIndex
  } = props;

  return (
    <React.Fragment>
      <input className='edit-field' onChange={ e => changeNewValue(e.target.value) } type="text" />
      <button
        className='edit-cancel-submit'
        onClick={ () => {
          editValue(newValue, currentIndex, value, objValue);
          toggleNeedToEditValue(toggleValue);
        }}
      >Edit</button>
      <button className='edit-cancel-submit' onClick={ () => toggleNeedToEditValue(toggleValue) }>Cancel</button>
    </React.Fragment>
  );
};

export default EditComponent;
