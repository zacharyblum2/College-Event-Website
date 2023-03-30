import React, { useState } from 'react'

import MapPicker from 'react-google-map-picker'

// Default location of UCF
const DefaultLocation = { lat: 28.60242974787704, lng: -81.20006918907166};
const DefaultZoom = 16;

const Map = () => {

  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation (lat, lng){
    setLocation({lat:lat, lng:lng});
  }
  
  function handleChangeZoom (newZoom){
    setZoom(newZoom);
  }

  function handleResetLocation(){
    setDefaultLocation({ ... DefaultLocation});
    setZoom(DefaultZoom);
  }

  return (
    <>
        {/* <button onClick={handleResetLocation}>Reset Location</button>
        <label>Latitute:</label><input type='text' value={location.lat} disabled/>
        <label>Longitute:</label><input type='text' value={location.lng} disabled/>
        <label>Zoom:</label><input type='text' value={zoom} disabled/> */}
        
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

export default Map