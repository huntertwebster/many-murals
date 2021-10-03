import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import './map.css';


const containerStyle = {
  width: '100%',
  height: '800px',
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
   useEffect(() => {
      dispatch({ type: 'FETCH_GALLERY' });
     }, []);
  // getting data from the gallery store for latiude and longitude
  const gallery = useSelector(store => store.gallery);
  console.log('this is the gallery data:', gallery);
  gallery.map(mural => {
    { mural.latitude }
    { mural.longitude }
  },
    console.log(mural.latitude),
    console.log(mural.longitude)
  );
  
                    
  console.log('this is the gallery lat:', gallery.latitude);
  console.log('this is the gallery long:', gallery.longitude);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBLntputF032155C2Gbg_n6ZB6vm7iNYA0"
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
        // {gallery.map(mural => (
        //   <Marker
        //     key={mural.id}
        //     position={{
        //       mural.latitude,
        //       mural.longitude
        //     }}
        //   />
          
        // />
        // ))}
      //  onLoad={map => {
      //   const bounds = new window.google.maps.LatLngBounds();
      //   map.fitBounds(bounds);
      // }}
        onUnmount={onUnmount}
      >
        
        { /* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  ) : <></>
}

export default Map;
