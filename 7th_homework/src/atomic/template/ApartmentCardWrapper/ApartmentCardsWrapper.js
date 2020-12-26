import React from 'react';

import { ApartmentCards, MyMapComponent } from '../../organisms/index.js';
import { Title } from '../../atoms/index.js';

const ApartmentCardsWrapper = () => {
  return (
    <div className="wrapper">
      <div style={{ width: '50%' }}>
        <Title size={1} className="title">
          Accommodation in this area of the map:
        </Title>
        <ApartmentCards />
      </div>
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div className="loading-element" />}
        containerElement={<div className="map-element_conteiner" />}
        mapElement={<div className="map-element" />}
      />
    </div>
  );
};

export default ApartmentCardsWrapper;
