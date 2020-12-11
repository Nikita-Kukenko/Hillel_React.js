import React from 'react';

import { ApartmentCards } from '../ApartmentCard/ApartmentCards';
import { MyMapComponent } from '../MyMapComponent/MyMapComponent';
import '../AllComponentStyles.css';

export const ApartmentCardsWrapper = () => {
  return (
    <div className="wrapper">
      <div style={{ width: '50%' }}>
        <h1 className="title">Accommodation in this area of the map:</h1>
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
  )
}
