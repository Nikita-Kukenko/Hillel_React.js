import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import UserPosts from "../UserPosts/UserPosts.js";
import UserCard from '../UserCard/UserCard.js'
import '../UserCardAndPosts.css';

const UserPostsWrapper = ({ match, editValue, handleChangeValue, userCardItems }) => {

  const [userPostsItems, setUserPostsItems] = useState([]);
  const [showElem, setShowElem] = useState(true);

  useEffect(() => {
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

    fetch(postsUrl)
      .then(response => {
        return response.json();
      })
      .then(posts => {
        const userPosts = posts.filter(item => item.userId === +match.params.id);
        setUserPostsItems(userPosts);
      })
      .catch(error => console.log(error));
  }, []);

  const userInfo = userCardItems.filter(item => item.id === +match.params.id);
  const currentIndex = userInfo[0].id - 1;
  const name = userInfo[0].name;

  return (
    <div className='posts-wrapper'>
       {
         userInfo && <UserCard
         {...userInfo[0]}
         editValue={editValue}
         handleChangeValue={handleChangeValue}
         currentIndex={currentIndex}
         showElem ={showElem}
       />
       }
      {
        userPostsItems && userPostsItems.map( item => (
          <UserPosts
            {...item}
            key={item.id}
            name={name}
          />
        ))
      }
    </div>
  )
};

UserPostsWrapper.propTypes = {
  match: PropTypes.object.isRequired,
  editValue: PropTypes.func.isRequired,
  handleChangeValue: PropTypes.func.isRequired,
  userCardItems: PropTypes.array.isRequired
}

export default UserPostsWrapper;
