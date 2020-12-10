import React, { useContext } from 'react';

import { ApartmentsContext } from '../../context/ApartmentsContext';
import '../AllComponentStyle.css';
import StarIcon from'./icon/star_favorite.png'

export const ApartmentCard = () => {
  const { apartments, setData } = useContext(ApartmentsContext);
  console.log(apartments, 'apartments');

  return (
    <div style={{ width: '50%' }}>
      <h1 class="title">Accommodation in this area of the map:</h1>
      {
        apartments && apartments.map(apartment => {
          const {
            name,
            thumbnailUrl,
            guestReviews: { badgeText, rating },
            address: { countryName, locality, region, streetAddress },
            ratePlan: {
              features: { freeCancellation, noCCRequired, paymentPreference },
              price: { info, current }
            }
          } = apartment;

          return (
            <div className="card-wrapper">
              <img src={thumbnailUrl}></img>
              <div className="card-info">
                <div>{name}</div>
                <h3>
                  {`${countryName} ${locality},${region} ${streetAddress}`}
                </h3>
                <span className="dash"></span>
                <p style={{ fontStyle: 'italic'}}>
                  {
                  `${freeCancellation ? 'Free cancellation' : ''} 
                   ${noCCRequired ? 'No CC Required' : ''} 
                   ${paymentPreference ? 'Payment Preference' : ''}`
                  }
                </p>
                <span>
                  {`${info} -`}
                  <b>{`${current}`}</b>
                </span>
                <p>
                  {`${badgeText || 'Middling'}: `}
                  <span style={{ fontWeight: `700` }}>{`${rating}`}</span>
                  <img className="star-icon" src={StarIcon}></img>
                </p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
