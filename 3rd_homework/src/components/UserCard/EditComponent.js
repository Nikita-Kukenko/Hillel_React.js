import React from 'react';
import PropTypes from 'prop-types';

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

EditComponent.defaultProps = {
  objValue: '',
}

EditComponent.propTypes = {
  value: PropTypes.string.isRequired,
  toggleValue: PropTypes.string.isRequired,
  objValue: PropTypes.string,
  changeNewValue: PropTypes.func.isRequired,
  editValue: PropTypes.func.isRequired,
  toggleNeedToEditValue: PropTypes.func.isRequired,
  newValue: PropTypes.string.isRequired,
  currentIndex: PropTypes.number.isRequired
}

export default EditComponent;
