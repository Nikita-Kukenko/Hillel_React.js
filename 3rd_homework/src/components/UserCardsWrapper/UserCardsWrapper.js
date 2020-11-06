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

  handleChangeName = (e) => {
    this.setState({ newName: e.target.value })
  }

  handleChangeUserName = (e) => {
    this.setState({ newUserName: e.target.value })
  }

  handleChangeEmail = (e) => {
    this.setState({ newUserEmail: e.target.value })
  }

  handleChangePhone = (e) => {
    this.setState({ newUserPhone: e.target.value })
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
            handleChangeName={this.handleChangeName} 
            handleChangeUserName={this.handleChangeUserName}
            handleChangeEmail={this.handleChangeEmail}
            handleChangePhone={this.handleChangePhone}
            toggleAddUserButton={this.toggleAddUserButton}
            isAddButtonDisabled={isAddButtonDisabled}
          />}
          <div className='wrapper'>
          <nav className='nav'>
            <button onClick={this.toggleAddUserButton} className='add-user'>Add User</button>
          </nav>
          { userCardItems.map((props, index) => (
            <UserCard {...props} key={props.id} removeElement={this.removeElement} currentIndex={index} />
          )) }
        </div>
        </React.Fragment>
    )
  }
}

export default UserCardsWrapper;