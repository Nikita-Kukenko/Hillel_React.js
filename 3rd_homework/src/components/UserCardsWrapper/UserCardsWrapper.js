import React from 'react';
import UserCard from '../UserCard/UserCard.js'
import AddUserModal from '../AddUserModal/AddUserModal.js'
import '../UserCardAndPosts.css';

class UserCardsWrapper extends React.Component {

  goToCardIdPage = (e, id) => {
    e.stopPropagation()
    this.props.history.push(`user/${id}`);
  }

  render() {
    const { 
      userCardItems,
      showModal,
      addNewElement,
      handleChangeValue,
      toggleAddUserButton,
      isAddButtonDisabled,
      removeElement,
      editValue
    } = this.props;

    const { goToCardIdPage } = this;

    return (
      <React.Fragment>
        {showModal && <AddUserModal 
          addNewElement={addNewElement} 
          handleChangeValue={handleChangeValue} 
          toggleAddUserButton={toggleAddUserButton}
          isAddButtonDisabled={isAddButtonDisabled}
        />}
        <div className='wrapper'>
          <nav className='nav'>
            <button onClick={toggleAddUserButton} className='add-user'>Add User</button>
          </nav>
          {userCardItems.map((item, index) => (
            <UserCard
              {...item}
              goToCardIdPage={goToCardIdPage}
              key={item.id}
              removeElement={removeElement}
              currentIndex={index}
              editValue={editValue}
            />
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default UserCardsWrapper;
