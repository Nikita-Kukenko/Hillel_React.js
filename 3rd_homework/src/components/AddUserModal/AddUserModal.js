import React from 'react';
import '../UserCard/UserCard.css';
// import UserCardsWrapper from "../UserCardsWrapper/UserCardsWrapper.js";

const AddUserModal = (props) => {

  const {
    addNewElement,
    handleChangeName,
    handleChangeUserName,
    handleChangeEmail,
    handleChangePhone,
    toggleAddUserButton, 
    isAddButtonDisabled
  } = props;

  return (
    <div className='modal-wrapper'>
      <div className='modal'>
        <p>
          <b>Name: </b>
          <input type='text' onChange={handleChangeName} />
        </p>
        <p>
          <b>User Name: </b>
          <input type='text' onChange={handleChangeUserName} />
        </p>
        <p>
          <b>Email: </b>
          <input type='email' onChange={handleChangeEmail} />
        </p>
        <p>
          <b>Phone: </b>
          <input type='phone' onChange={handleChangePhone} />
        </p>
        <div className='modal-button'>
          <button className={isAddButtonDisabled ? 'add-user' : 'unable-button'}
            onClick={addNewElement}
            disabled={!isAddButtonDisabled}>
            Add
          </button>
          <button className='add-user'onClick={toggleAddUserButton}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default AddUserModal;