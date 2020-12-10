import React from 'react';

import { ApartmentCard } from '../ApartmentCard/ApartmentCard';
import { MyMapComponent } from '../MyMapComponent/MyMapComponent';
import '../AllComponentStyle.css';

export const ApartmentCardsWrapper = () => {
  return (
    <div className="wrapper">
      <ApartmentCard />
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
