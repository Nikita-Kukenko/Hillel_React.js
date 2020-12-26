import React, { useContext } from 'react';

import { ApartmentsContext } from '../context/ApartmentsContext.js';
import Apartment from '../../molecules/Apartment/Apartment.js';

const ApartmentCards = () => {
  const { apartments, setData } = useContext(ApartmentsContext);

  return (
    apartments &&
    apartments.map((apartment) => {
      const {
        name,
        thumbnailUrl,
        guestReviews: { badgeText, rating },
        address: { countryName, locality, region, streetAddress },
        ratePlan: {
          features: { freeCancellation, noCCRequired, paymentPreference },
          price: { info, current },
        },
      } = apartment;

      return (
        <Apartment
          name={name}
          thumbnailUrl={thumbnailUrl}
          badgeText={badgeText}
          rating={rating}
          countryName={countryName}
          locality={locality}
          region={region}
          streetAddress={streetAddress}
          freeCancellation={freeCancellation}
          noCCRequired={noCCRequired}
          paymentPreference={paymentPreference}
          info={info}
          current={current}
        />
      );
    })
  );
};

export default ApartmentCards;
