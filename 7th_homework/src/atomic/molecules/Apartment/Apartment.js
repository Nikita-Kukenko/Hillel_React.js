import React from 'react';

import { Title, Text, Image } from '../../atoms/index.js';

const Apartment = (props) => {
  const {
    name,
    thumbnailUrl,
    badgeText,
    rating,
    countryName,
    locality,
    region,
    streetAddress,
    freeCancellation,
    noCCRequired,
    paymentPreference,
    info,
    current,
  } = props;

  return (
    <div className="card-wrapper">
      <Image url={thumbnailUrl} className="card-wrapper_img" />
      <div className="card-info">
        <Text>{name}</Text>
        <Title
          size={3}
          className="color-black"
        >{`${countryName} ${locality},${region} ${streetAddress}`}</Title>
        <span className="dash" />
        <Text style={{ fontStyle: 'italic' }}>
          {`${freeCancellation ? 'Free cancellation' : ''}
               ${noCCRequired ? 'No CC Required' : ''}
               ${paymentPreference ? 'Payment Preference' : ''}`}
        </Text>
        <Text className="color-black">
          {`${info} -`}
          <b>{`${current}`}</b>
        </Text>
        <Text>
          {`${badgeText || 'Middling'}: `}
          <b className="color-black">{`${rating}`}</b>
          <Image url="/starFavorite.png" className="star-icon" />
        </Text>
      </div>
    </div>
  );
};

export default Apartment;
