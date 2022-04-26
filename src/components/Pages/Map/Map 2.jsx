import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
// import { withScriptjs, withGoogleMap } from 'react-google-maps';
import { Marker, InfoWindow } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./Map.css";

const containerStyle = {
  width: "100%",
  height: "90vh",
};

const center = {
  lat: 46.87696,
  lng: -96.78464,
};

const position = {
  lat: 46.87696,
  lng: -96.78464,
};

function Map() {
  const dispatch = useDispatch();
  const [selectedMural, setSelectedMural] = useState(null);
  // getting data from the gallery store for latiude and longitude
  const gallery = useSelector((store) => store.gallery);

  // const infowindow = new google.maps.InfoWindow({
  //     content: contentString,
  //     maxWidth: 200,
  //   });
  useEffect(() => {
    dispatch({ type: "FETCH_GALLERY" });
    dispatch({ type: "FETCH_MAP" });
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_KEY}`,
  });

  const [map, setMap] = React.useState(null);

  //   const onLoad = React.useCallback(function callback(map) {
  //     const bounds = new window.google.maps.LatLngBounds();
  //     map.fitBounds(bounds);
  //     setMap(map)
  //   }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        style={{ fontFamily: "Cormorant Garamond" }}
        zoom={11}
        onUnmount={onUnmount}
      >
        {gallery.map((mural) => (
          <Marker
            key={mural.id}
            position={{
              lat: parseFloat(mural.latitude),
              lng: parseFloat(mural.longitude),
            }}
            onClick={() => {
              setSelectedMural(mural);
            }}
          />
        ))}

        {selectedMural && (
          <InfoWindow
            position={{
              lat: parseFloat(selectedMural.latitude),
              lng: parseFloat(selectedMural.longitude),
            }}
            onCloseClick={() => {
              setSelectedMural(null);
            }}
          >
            <div>
              <h2 style={{ fontFamily: "Cormorant Garamond" }}>
                {selectedMural.title}
              </h2>
              <p>Click the image to go to it's location!</p>
              <img
                className="popupImage"
                src={selectedMural?.images[0]?.url}
                style={{
                  width: "15em",
                  height: "15em",
                  fontFamily: "Cormorant Garamond",
                }}
                alt={selectedMural?.title}
                onClick={() => {
                  window.open(
                    `http://maps.google.com/maps?q=${selectedMural.latitude},${selectedMural.longitude}`,
                    "_blank"
                  );
                }}
              />
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default Map;
