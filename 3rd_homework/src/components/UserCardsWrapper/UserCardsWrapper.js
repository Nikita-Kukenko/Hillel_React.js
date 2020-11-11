import React from 'react';
import UserCard from '../UserCard/UserCard.js'
import { users } from "../users"
import '../UserCard/UserCard.css'
import AddUserModal from '../AddUserModal/AddUserModal.js'

class UserCardsWrapper extends React.Component {

    state = {
      userCardItems: users,
      newName: '',
      newUserName: '',
      newUserEmail: '',
      newUserPhone: '',
      showModal: false,
    }

  removeElement = (index) => {
    users.splice(index, 1);
    this.setState({ userCardItems: users })
  }

  handleChangeValue = (e, value) => {
    this.setState({ [value]: e.target.value })
  }

  toggleAddUserButton = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  addNewElement = () => {
    users.push({
      id: Math.round(Math.random() * (1000000 - 1) + 1),
      name: this.state.newName,
      username: this.state.newUserName,
      email: this.state.newUserEmail,
      phone: this.state.newUserPhone,
      address: {},
      company: {}
    })
    this.setState({
      userCardItems: users,
      newName: '',
      newUserName: '',
      newUserEmail: '',
      newUserPhone: '',
    })

    this.toggleAddUserButton();
  }

  editValue = (value, index, key, objKey = '') => {
      let item = users[index];
      if (objKey) {
        item[objKey][key] = value;
      } else {
        item[key] = value;
      }

      this.setState({ userCardItems: users })
  }

  render() {
    const { 
      userCardItems,
      showModal,
      newName,
      newUserName,
      newUserEmail,
      newUserPhone
    } = this.state;

    const isAddButtonDisabled = newName && newUserName && newUserEmail && newUserPhone;

    return (
        <React.Fragment>
          {showModal && <AddUserModal 
            addNewElement={this.addNewElement} 
            handleChangeValue={this.handleChangeValue} 
            toggleAddUserButton={this.toggleAddUserButton}
            isAddButtonDisabled={isAddButtonDisabled}
          />}
          <div className='wrapper'>
          <nav className='nav'>
            <button onClick={this.toggleAddUserButton} className='add-user'>Add User</button>
          </nav>
          { userCardItems.map((item, index) => (
            <UserCard 
              {...item}
              key={item.id}
              removeElement={this.removeElement}
              currentIndex={index}
              editValue={this.editValue}
            />
          )) }
        </div>
        </React.Fragment>
    )
  }
}

export default UserCardsWrapper;