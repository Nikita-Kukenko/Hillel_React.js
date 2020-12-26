import React, { useContext } from 'react';

import { ApartmentsContext } from '../../../context/ApartmentsContext.js';
import '../../../component/AllComponentStyles.css';
import StarIcon from'../../../assets/star_favorite.png'
import { Title, Text, Image } from '../../atoms/index.js';

const ApartmentCards = () => {

  return (
    <div style={{ width: '300px', margin: '0 auto', textAlign: 'center' }}>
      <Title size={2}>
        There is a Title
      </Title>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </Text>
    </div>
  )
  // const { apartments, setData } = useContext(ApartmentsContext);

  // apartments && console.log(apartments, 'apartments');

  // return (
  //   apartments && apartments.map(apartment => {
  //     const {
  //       name,
  //       thumbnailUrl,
  //       guestReviews: { badgeText, rating },
  //       address: { countryName, locality, region, streetAddress },
  //       ratePlan: {
  //         features: { freeCancellation, noCCRequired, paymentPreference },
  //           price: { info, current }
  //       }
  //     } = apartment;

  //     return (
  //       <div className="card-wrapper">
  //         <img src={thumbnailUrl} />
  //         <div className="card-info">
  //           <div>{name}</div>
  //           <h3>
  //             {`${countryName} ${locality},${region} ${streetAddress}`}
  //           </h3>
  //           <span className="dash" />
  //           <p style={{ fontStyle: 'italic'}}>
  //             {
  //             `${freeCancellation ? 'Free cancellation' : ''} 
  //              ${noCCRequired ? 'No CC Required' : ''} 
  //              ${paymentPreference ? 'Payment Preference' : ''}`
  //             }
  //           </p>
  //           <span>
  //             {`${info} -`}
  //             <b>{`${current}`}</b>
  //           </span>
  //           <p>
  //             {`${badgeText || 'Middling'}: `}
  //             <span style={{ fontWeight: `700` }}>{`${rating}`}</span>
  //             <img className="star-icon" src={StarIcon} />
  //           </p>
  //         </div>
  //       </div>
  //     )
  //   })
  // )
}

export default ApartmentCards;
