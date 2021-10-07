import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// import { withScriptjs, withGoogleMap } from 'react-google-maps';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import '../Map/Map.css';
import axios from 'axios';
import mapStyles from './mapStyles';



const containerStyle = {
  width: '100%',
  height: '650px',
};

const center = {
  lat: 46.876960,
  lng: -96.784640
};

const position = {
  lat: 46.876960,
  lng: -96.784640
}



function Map() {
  const dispatch = useDispatch();
  const [selectedMural, setSelectedMural] = useState(null);
  // getting data from the gallery store for latiude and longitude
  const gallery = useSelector(store => store.gallery)

// const infowindow = new google.maps.InfoWindow({
//     content: contentString,
//     maxWidth: 200,
//   });
  useEffect(() => {
    dispatch({ type: 'FETCH_GALLERY' });
  }, []);
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `AIzaSyA-QtKQd-BOP2ny5XYcHSSFb8TYEd3grKg`
  })

  const [map, setMap] = React.useState(null)

  //   const onLoad = React.useCallback(function callback(map) {
  //     const bounds = new window.google.maps.LatLngBounds();
  //     map.fitBounds(bounds);
  //     setMap(map)
  //   }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  return isLoaded ? (
    <div className="map">
      
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onUnmount={onUnmount}
      >
        {gallery.map(mural => (
        
        <Marker
          key={mural.id}
          position={{
            lat: parseFloat(mural.latitude),
            lng: parseFloat(mural.longitude)
          }}
            onClick={() => {
              setSelectedMural(mural)
            }}
        />
        ))}

        
        {selectedMural && (
          <InfoWindow
            position={{
            lat: parseFloat(selectedMural.latitude),
            lng: parseFloat(selectedMural.longitude)
            }}
            onCloseClick={() => {
              setSelectedMural(null);
            }}
          >
            <div>
              <h2>{selectedMural.title}</h2>
              <img src={selectedMural?.images[0]?.url} alt={selectedMural?.title}/>
            </div>
            </InfoWindow>
        )}
        
      </GoogleMap>
    </div>
  ) : <></>
}

export default Map;
