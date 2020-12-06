import React from 'react';
import PropTypes from 'prop-types';

import '../UserCardAndPosts.css';

const AddUserModal = props => {
  const {
    addNewElement,
    handleChangeValue,
    toggleAddUserButton, 
    isAddButtonDisabled
  } = props;

  return (
    <div className='modal-wrapper'>
      <div className='modal'>
        <p>
          <b>Name: </b>
          <input type='text' onChange={ e => handleChangeValue(e,'newName') } />
        </p>
        <p>
          <b>User Name: </b>
          <input type='text' onChange={ e => handleChangeValue(e,'newUserName') } />
        </p>
        <p>
          <b>Email: </b>
          <input type='email' onChange={ e => handleChangeValue(e,'newUserEmail') } />
        </p>
        <p>
          <b>Phone: </b>
          <input type='phone' onChange={ e => handleChangeValue(e,'newUserPhone') } />
        </p>
        <div className='modal-button'>
          <button className={isAddButtonDisabled ? 'add-user' : 'unable-button'}
            onClick={addNewElement}
            disabled={!isAddButtonDisabled}>
            Add
          </button>
          <button className='add-user' onClick={toggleAddUserButton}>Cancel</button>
        </div>
      </div>
    </div>
  )
};

AddUserModal.propTypes = {
  addNewElement: PropTypes.func.isRequired,
  handleChangeValue: PropTypes.func.isRequired,
  toggleAddUserButton: PropTypes.func.isRequired,
  isAddButtonDisabled: PropTypes.string.isRequired
}

export default AddUserModal;
