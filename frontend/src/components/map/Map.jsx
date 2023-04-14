import React, { useState } from 'react'

import MapPicker from 'react-google-map-picker'
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
Geocode.setLanguage("en");
Geocode.setLocationType("ROOFTOP");

// Default location of UCF
const DefaultLocation = { lat: 28.60242974787704, lng: -81.20006918907166};
const DefaultAddress = "12715 Pegasus Cir, Orlando, FL 32816, USA";
const DefaultZoom = 16;

const Map = (props) => {
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
  const [defaultAddress, setDefaultAddress] = useState(DefaultAddress);
  const [location, setLocation] = useState(defaultLocation);
  const [address, setAddress] = useState(defaultAddress);
  const [zoom, setZoom] = useState(DefaultZoom);

  console.log(defaultAddress);

  function handleChangeLocation (lat, lng){
    setLocation({lat:lat, lng:lng});
    Geocode.fromLatLng(lat.toString(), lng.toString()).then(
        (response) => {
            const address = response.results[0].formatted_address;
            setAddress(address);
            
            // Add to local storage.
            let location = {address: address, lat: lat, lng: lng};
            localStorage.setItem('loc_data', JSON.stringify(location)); 
        },
        (error) => {
            console.log(error);
        }
    ) 
  }
  
  function handleChangeZoom (newZoom){
    setZoom(newZoom);
  }

  function handleResetLocation(){
    setDefaultLocation({ ...DefaultLocation});
    setZoom(DefaultZoom);
  }

  if (props.create)
  {
    return (
        <>
            {/* <button onClick={handleResetLocation}>Reset Location</button>
            <label>Latitute:</label><input type='text' value={location.lat} disabled/>
            <label>Longitute:</label><input type='text' value={location.lng} disabled/>
            <label>Zoom:</label><input type='text' value={zoom} disabled/> */}
            <h6>Address: {address} </h6>
            <MapPicker 
                defaultLocation={defaultLocation}
                zoom={zoom}
                mapTypeId="roadmap"
                style={{height:'700px'}}
                onChangeLocation={handleChangeLocation} 
                onChangeZoom={handleChangeZoom}
                apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8'/>
         </>
      );
  }
  else
  {
    // Given name, lat and long
    Geocode.fromAddress(props.location.name).then(
      (response) => {
        const {lat, lng } = response.results[0].geometry.location;
        setLocation({lat: lat, lng: lng})
      },
      (error) => {
        console.log("ERROR " + error);
      }
    );

    return (
        <>
            <h6>Address: {props.location.name} </h6>
            <MapPicker 
                defaultLocation={{lat: location.lat, lng: location.lng}}
                zoom={18}
                mapTypeId="roadmap"
                style={{height:'700px'}}
                apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8'/>
         </>
      );
  }
  
}

export default Map