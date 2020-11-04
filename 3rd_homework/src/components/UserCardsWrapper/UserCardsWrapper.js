import React from 'react';
import UserCard from '../UserCard/UserCard.js'
import { users } from "../users"
import '../UserCard/UserCard.css'

class UserCardsWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userCardItems: users
    }
  }

  render() {
    const { userCardItems } = this.state;

    return (
      <React.Fragment>
        <div className='wrapper'>
          <nav className='nav'>
            <button className='add-user'>Add User</button>
          </nav>
          { userCardItems.map((props, index) => (
            <UserCard {...props} key={props.id} currentIndex={index} />
          )) }
        </div>
      </React.Fragment>
    )
  }
}

export default UserCardsWrapper;