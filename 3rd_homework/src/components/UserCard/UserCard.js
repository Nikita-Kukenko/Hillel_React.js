import React from 'react';
import '../UserCardAndPosts.css';
import EditComponent from './EditComponent.js'

class UserCard extends React.Component {

  state = {
    editName: false,
    editUserName: false,
    editEmail: false,
    editPhone: false,
    editWebsite: false,
    editStreet: false,
    editSuite: false,
    editCity: false,
    editZipCode: false,
    editCompanyName: false,
    editCatchPhrase: false,
    editBS: false,
    newValue: ''
  }

  toggleNeedToEditValue = value => {
    this.setState({ [value]: !this.state[value] });
  }

  changeNewValue = value => {
    this.setState({ newValue: value });
  }

  render() {
    const {
      id,
      name,
      username,
      email,
      address,
      phone,
      website,
      company,
      removeElement,
      currentIndex,
      editValue,
      goToCardIdPage,
    } = this.props;
    const { street, suite, city, zipcode } = address;
    const { name: companyName, catchPhrase, bs } = company;
    const dash = '-';

    const {
      editName,
      newValue,
      editUserName,
      editEmail,
      editPhone,
      editWebsite,
      editStreet,
      editSuite,
      editCity,
      editZipCode,
      editCompanyName,
      editCatchPhrase,
      editBS,
    } = this.state;

    const { toggleNeedToEditValue, changeNewValue } = this;

    return (
      <div className='user-card'>
        {goToCardIdPage && <span className="close" onClick={ e => removeElement(e, currentIndex) }></span>}
        <p>
          <b>ID: </b> 
          {id}
        </p>
        <p onDoubleClick={() => toggleNeedToEditValue('editName')}>
          <b>Name: </b> 
          {editName 
            ? <EditComponent 
                value='name'
                toggleValue='editName'
                changeNewValue={changeNewValue}
                editValue={editValue}
                toggleNeedToEditValue={toggleNeedToEditValue}
                newValue={newValue}
                currentIndex={currentIndex}
              />
            : name}
        </p>
        <p onDoubleClick={() => toggleNeedToEditValue('editUserName')}>
          <b>User Name: </b> 
          {editUserName 
            ? <EditComponent 
                value='username'
                toggleValue='editUserName'
                changeNewValue={changeNewValue}
                editValue={editValue}
                toggleNeedToEditValue={toggleNeedToEditValue}
                newValue={newValue}
                currentIndex={currentIndex}
              />
            : username}
        </p>
        <p onDoubleClick={() => toggleNeedToEditValue('editEmail')}>
          <b>Email: </b> 
          {editEmail 
            ? <EditComponent 
                value='email'
                toggleValue='editEmail'
                changeNewValue={changeNewValue}
                editValue={editValue}
                toggleNeedToEditValue={toggleNeedToEditValue}
                newValue={newValue}
                currentIndex={currentIndex}
              />
            : email}
        </p>
        <p onDoubleClick={() => toggleNeedToEditValue('editPhone')}>
          <b>Phone: </b> 
          {editPhone 
            ? <EditComponent 
                value='phone'
                toggleValue='editPhone'
                changeNewValue={changeNewValue}
                editValue={editValue}
                toggleNeedToEditValue={toggleNeedToEditValue}
                newValue={newValue}
                currentIndex={currentIndex}
              />
            : phone}
        </p>
        <p onDoubleClick={() => toggleNeedToEditValue('editWebsite')}>
          <b>Website: </b> 
          {editWebsite 
            ? <EditComponent 
                value='website'
                toggleValue='editWebsite'
                changeNewValue={changeNewValue}
                editValue={editValue}
                toggleNeedToEditValue={toggleNeedToEditValue}
                newValue={newValue}
                currentIndex={currentIndex}
              />
            : (website || dash)}
        </p>
        <div className='info-wrapper'>
          <div className='address'>
            <h3>Address:</h3>
            <p onDoubleClick={() => toggleNeedToEditValue('editStreet')}>
              <b>Street: </b> 
              {editStreet 
                ? <EditComponent 
                    value='street'
                    toggleValue='editStreet'
                    objValue='address'
                    changeNewValue={changeNewValue}
                    editValue={editValue}
                    toggleNeedToEditValue={toggleNeedToEditValue}
                    newValue={newValue}
                    currentIndex={currentIndex}
                  />
                : (street || dash)}
            </p>
            <p onDoubleClick={() => toggleNeedToEditValue('editSuite')}>
              <b>Suite: </b> 
              {editSuite 
                ? <EditComponent 
                    value='suite'
                    toggleValue='editSuite'
                    objValue='address'
                    changeNewValue={changeNewValue}
                    editValue={editValue}
                    toggleNeedToEditValue={toggleNeedToEditValue}
                    newValue={newValue}
                    currentIndex={currentIndex}
                  />
                : (suite || dash)}
            </p>
            <p onDoubleClick={() => toggleNeedToEditValue('editCity')}>
              <b>City: </b> 
              {editCity 
                ? <EditComponent 
                    value='city'
                    toggleValue='editCity'
                    objValue='address'
                    changeNewValue={changeNewValue}
                    editValue={editValue}
                    toggleNeedToEditValue={toggleNeedToEditValue}
                    newValue={newValue}
                    currentIndex={currentIndex}
                  />
                : (city || dash)}
            </p>
            <p onDoubleClick={() => toggleNeedToEditValue('editZipCode')}>
              <b>Zip-code: </b> 
              {editZipCode 
                ? <EditComponent 
                    value='zipcode'
                    toggleValue='editZipCode'
                    objValue='address'
                    changeNewValue={changeNewValue}
                    editValue={editValue}
                    toggleNeedToEditValue={toggleNeedToEditValue}
                    newValue={newValue}
                    currentIndex={currentIndex}
                  />
                : (zipcode || dash)}
            </p>
          </div>
          <div className='company'>
            <h3>Company:</h3>
            <p onDoubleClick={() => toggleNeedToEditValue('editCompanyName')}>
              <b>Name: </b> 
              {editCompanyName 
                ? <EditComponent 
                    value='name'
                    toggleValue='editCompanyName'
                    objValue='company'
                    changeNewValue={changeNewValue}
                    editValue={editValue}
                    toggleNeedToEditValue={toggleNeedToEditValue}
                    newValue={newValue}
                    currentIndex={currentIndex}
                  />
                : (companyName || dash)}
            </p>
            <p onDoubleClick={() => toggleNeedToEditValue('editCatchPhrase')}>
              <b>Catch Phrase: </b> <br />
              {editCatchPhrase 
                ? <EditComponent 
                    value='catchPhrase'
                    toggleValue='editCatchPhrase'
                    objValue='company'
                    changeNewValue={changeNewValue}
                    editValue={editValue}
                    toggleNeedToEditValue={toggleNeedToEditValue}
                    newValue={newValue}
                    currentIndex={currentIndex}
                  />
                : (catchPhrase || dash)}
            </p>
            <p onDoubleClick={() => toggleNeedToEditValue('editBS')}>
              <b>BS: </b> <br />
              {editBS 
                ? <EditComponent 
                    value='bs'
                    toggleValue='editBS'
                    objValue='company'
                    changeNewValue={changeNewValue}
                    editValue={editValue}
                    toggleNeedToEditValue={toggleNeedToEditValue}
                    newValue={newValue}
                    currentIndex={currentIndex}
                  />
                : (bs || dash)}
            </p>
          </div>
        </div>
        {goToCardIdPage && <button className='edit-cancel-submit' onClick={(e) => goToCardIdPage(e, id)}>Look more...</button>}
      </div>
    )
  }

};


export default UserCard;
