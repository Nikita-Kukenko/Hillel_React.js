import React, { useContext } from 'react';
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';

import { ApartmentsContext } from '../context/ApartmentsContext.js';

const MyMapComponent = withScriptjs(
  withGoogleMap(({ isMarkerShown }) => {
    const { apartments, setData } = useContext(ApartmentsContext);

    return (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 40.773342, lng: -74.043047 }}
      >
        {isMarkerShown &&
          apartments &&
          apartments.map(({ coordinate: { lat, lon } }) => (
            <Marker position={{ lat: lat, lng: lon }} />
          ))}
      </GoogleMap>
    );
  })
);

export default MyMapComponent;