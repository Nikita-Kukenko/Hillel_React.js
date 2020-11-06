import React from 'react';
import './UserCard.css';

const UserCard = (props) => {

  const { id, name, username, email, address, phone, website, company, removeElement, currentIndex } = props;
  const { street, suite, city, zipcode } = address;
  const { name: companyName, catchPhrase, bs } = company;
  let dash = '-';

  return (
      <div className='user-card'>
        <span className="close" onClick={() => removeElement(currentIndex)}></span>
        <p><b>ID:</b> {id}</p>
        <p><b>Name:</b> {name}</p>
        <p><b>User Name:</b> {username}</p>
        <p><b>email:</b> {email}</p>
        <p><b>Phone:</b> {phone}</p>
        <p><b>Website:</b> {website || dash}</p>
        <div className='info-wrapper'>
          <div className='address'>
            <h3>Address:</h3>
            <p><b>Street:</b> {street || dash}</p>
            <p><b>Suite:</b> {suite || dash}</p>
            <p><b>Ciry:</b> {city || dash}</p>
            <p><b>Zip-code:</b> {zipcode || dash}</p>
          </div>
          <div className='company'>
            <h3>Company:</h3>
            <p><b>Name:</b> {companyName || dash}</p>
            <p><b>Catch Phrase:</b> <br />{catchPhrase || dash}</p>
            <p><b>BS:</b> <br />{bs || dash}</p>
          </div>
        </div>
      </div>
  )
};


export default UserCard;