import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import UserCardsWrapper from './UserCardsWrapper/UserCardsWrapper.js';
import UserPostsWrapper from './UserPostsWrapper/UserPostsWrapper.js';

const MyApp = () => {

  const myAppData = {
    userCardItems: [],
    newName: '',
    newUserName: '',
    newUserEmail: '',
    newUserPhone: '',
  }

  const [appData, setAppData] = useState(myAppData);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';

    fetch(usersUrl)
      .then(response => {
        return response.json();
      })
      .then(users => {
        setAppData(prevAppData => {
          return { ...prevAppData, userCardItems: users }
        })
      })
      .catch(error => console.log(error));
  }, []);

  const removeElement = (e, index) => {
    e.stopPropagation()
    const items = appData.userCardItems;
    items.splice(index, 1);
    setAppData(prevAppData => {
      return { ...prevAppData, userCardItems: items };
    });
  }

  const handleChangeValue = (e, value) => {
    setAppData(prevAppData => {
      return { ...prevAppData, [value]: e.target.value };
    })
  }

  const toggleAddUserButton = () => {
    setShowModal(!showModal);
  }

  const addNewElement = () => {
    const items = appData.userCardItems;
    const {
      newName,
      newUserName,
      newUserEmail,
      newUserPhone
    } = appData;

    items.push({
      id: Math.round(Math.random() * (1000000 - 1) + 1),
      name: newName,
      username: newUserName,
      email: newUserEmail,
      phone: newUserPhone,
      address: {},
      company: {}
    })
    setAppData(prevAppData => {
      return { ...prevAppData, userCardItems: items }
    });
    setAppData(prevAppData => {
      return {
        ...prevAppData,
        userCardItems: items,
        newName: '',
        newUserName: '',
        newUserEmail: '',
        newUserPhone: '',
      }
    });

    toggleAddUserButton();
  }

  const editValue = (value, index, key, objKey = '') => {
    let item = appData.userCardItems[index];
    if (objKey) {
      item[objKey][key] = value;
    } else {
      item[key] = value;
    }

    setAppData(prevAppData => {
      return { ...prevAppData, userCardItems: appData.userCardItems }
    });
  }

  const {
    userCardItems,
    newName,
    newUserName,
    newUserEmail,
    newUserPhone
  } = appData;

  const isAddButtonDisabled = newName && newUserName && newUserEmail && newUserPhone;

  return (
    <React.Fragment>
      <Switch>
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
        } />
        <Route path="/user/:id" exact render={ props =>
          <UserPostsWrapper
            {...props}
            userCardItems={[...userCardItems]}
            editValue={editValue}
            handleChangeValue={handleChangeValue}
          />
        } />
      </Switch>
    </React.Fragment>
  )
};

export default MyApp;
