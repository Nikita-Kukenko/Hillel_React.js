import React, { useContext } from 'react';
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";

import { ApartmentsContext } from '../../context/ApartmentsContext';

export const MyMapComponent = withGoogleMap(({ isMarkerShown }) => {
  const { apartments, setData } = useContext(ApartmentsContext);

  return(
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: 40.77067970947186, lng: -73.97160614258186 }}
    >
      {
        isMarkerShown && apartments && apartments.map(({ coordinate: { lat, lon } }) => (
          <Marker position={{ lat: lat, lng: lon }} />
        ))
      }
    </GoogleMap>
  )
});
