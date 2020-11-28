import React from 'react';
import { withRouter } from 'react-router-dom'
import '../UserCardAndPosts.css';

class UserPosts extends React.Component {

  render() {
    const { title, body, name } = this.props;

    return (
      <React.Fragment>
        <div className='user-post'>
          <h1 className='post-title'>{title}</h1>
          <p className='post-body'>{body}</p>
          <p className='user-name'>{name}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(UserPosts);
