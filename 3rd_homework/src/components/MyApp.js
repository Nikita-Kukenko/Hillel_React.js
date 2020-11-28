import React from 'react';
import { Route } from 'react-router-dom';
import UserCardsWrapper from './UserCardsWrapper/UserCardsWrapper.js';
import UserPostsWrapper from './UserPostsWrapper/UserPostsWrapper.js';

class MyApp extends React.Component {

  state = {
    userCardItems: null,
    newName: '',
    newUserName: '',
    newUserEmail: '',
    newUserPhone: '',
    showModal: false,
  }

  componentWillMount() {
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';

    fetch(usersUrl)
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState((prevState) => { 
          return { ...prevState, userCardItems: users }
        });
      })
  }

  removeElement = (e, index) => {
    e.stopPropagation()
    const items = this.state.userCardItems;
    items.splice(index, 1);
    this.setState(prevState => { 
      return { ...prevState, userCardItems: items }
    });
  }

  handleChangeValue = (e, value) => {
    this.setState({ [value]: e.target.value })
  }

  toggleAddUserButton = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  addNewElement = () => {
    const items = this.state.userCardItems;
    const {
      newName,
      newUserName,
      newUserEmail,
      newUserPhone
    } = this.state;

    items.push({
      id: Math.round(Math.random() * (1000000 - 1) + 1),
      name: newName,
      username: newUserName,
      email: newUserEmail,
      phone: newUserPhone,
      address: {},
      company: {}
    })
    this.setState(prevState => { 
      return { ...prevState, userCardItems: items }
    });
    this.setState({
      userCardItems: items,
      newName: '',
      newUserName: '',
      newUserEmail: '',
      newUserPhone: '',
    });

    this.toggleAddUserButton();
  }

  editValue = (value, index, key, objKey = '') => {
    let item = this.state.userCardItems[index];
    if (objKey) {
      item[objKey][key] = value;
    } else {
      item[key] = value;
    }

    this.setState(prevState => { 
      return { ...prevState, userCardItems: this.state.userCardItems }
    });
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

    const {
      removeElement,
      editValue,
      addNewElement,
      handleChangeValue,
      toggleAddUserButton
    } = this;

    if(!userCardItems) {
      return null
    }

    const isAddButtonDisabled = newName && newUserName && newUserEmail && newUserPhone;

    return (
      <React.Fragment>
        <Route path="/" exact render={ props =>
            <UserCardsWrapper
              {...props}
              showModal={showModal}
              userCardItems={[...userCardItems]}
              removeElement={removeElement}
              editValue={editValue}
              addNewElement={addNewElement} 
              handleChangeValue={handleChangeValue} 
              toggleAddUserButton={toggleAddUserButton}
              isAddButtonDisabled={isAddButtonDisabled}
            />
          } 
        />
        <Route path="/user/:id" exact render={ props => 
            <UserPostsWrapper
              {...props}
              userCardItems={[...userCardItems]}
              editValue={editValue}
              handleChangeValue={handleChangeValue}
            />
          } />
      </React.Fragment>
    )
  }
}

export default MyApp;
