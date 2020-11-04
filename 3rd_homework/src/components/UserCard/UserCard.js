import React from 'react';
import './UserCard.css';

const UserCard = (props) => {

  const { id, name, username, email, address, phone, website, company } = props;
  const { street, suite, city, zipcode } = address;
  const { name: companyName, catchPhrase, bs } = company;

  return (
      <div className='user-card'>
        <p><b>ID:</b> {id}</p>
        <p><b>Name:</b> {name}</p>
        <p><b>User Name:</b> {username}</p>
        <p><b>email:</b> {email}</p>
        <p><b>Phone:</b> {phone}</p>
        <p><b>Website:</b> {website}</p>
        <div className='info-wrapper'>
          <div className='address'>
            <h3>Address</h3>
            <p><b>Street:</b> {street}</p>
            <p><b>Suite:</b> {suite}</p>
            <p><b>Ciry:</b> {city}</p>
            <p><b>Zip-code:</b> {zipcode}</p>
          </div>
          <div className='company'>
            <h3>Company</h3>
            <p><b>Name:</b> {companyName}</p>
            <p><b>Catch Phrase:</b> <br />{catchPhrase}</p>
            <p><b>BS:</b> <br />{bs}</p>
          </div>
        </div>
      </div>
  )
};


export default UserCard;