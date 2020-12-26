import React, { useContext } from 'react';

import { ApartmentsContext } from '../../context/ApartmentsContext';
import '../AllComponentStyles.css';
import StarIcon from'./icon/star_favorite.png'

export const ApartmentCards = () => {
  const { apartments, setData } = useContext(ApartmentsContext);

  apartments && console.log(apartments, 'apartments');

  return (
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
          <img src={thumbnailUrl} />
          <div className="card-info">
            <div>{name}</div>
            <h3>
              {`${countryName} ${locality},${region} ${streetAddress}`}
            </h3>
            <span className="dash" />
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
              <img className="star-icon" src={StarIcon} />
            </p>
          </div>
        </div>
      )
    })
  )
}
