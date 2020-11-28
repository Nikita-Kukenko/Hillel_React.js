import React from 'react';
import UserPosts from "../UserPosts/UserPosts.js";
import UserCard from '../UserCard/UserCard.js'
import '../UserCardAndPosts.css';

class UserPostsWrapper extends React.Component {
  
  state = {
      userPostsItems: [],
    }

  componentWillMount(){
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    
    fetch(postsUrl)
      .then((response) => {
        return response.json();
      })
      .then((posts) => {
        const userPosts = posts.filter(item => item.userId === +this.props.match.params.id);
        this.setState((prevState) => {
          return {...prevState, userPostsItems: userPosts}
        })
      })
  }

  render() {
    const { userPostsItems } = this.state;
    const { editValue, handleChangeValue, userCardItems } = this.props;

    const userInfo = userCardItems.filter(item => item.id === +this.props.match.params.id);
    const currentIndex = userInfo[0].id - 1;
    const name = userInfo[0].name;

    return (
      <div className='posts-wrapper'>
         <UserCard 
          {...userInfo[0]}
          editValue={editValue}
          handleChangeValue={handleChangeValue}
          currentIndex={currentIndex}
        />
        {userPostsItems.map(item => (
            <UserPosts
              {...item}
              key={item.id}
              name={name}
            />
          ))}
      </div>
    )
  }
}

export default UserPostsWrapper;
