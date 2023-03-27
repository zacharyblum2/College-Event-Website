import React, { Component } from 'react';
import LocationPicker from 'react-location-picker';

/* Default position */
const defaultPosition = {
  lat: 27.9878,
  lng: 86.9250
};


export default class LocationPickerExample extends Component {
  constructor (props) {
    super(props);

    this.state = {
      address: props.address,
      position: {
         lat: props.latitude,
         lng: props.longitude
      }
    };

    console.log(props.address);

    // Bind
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleLocationChange ({ position, address, places }) {

    // Set new location
    this.setState({ position, address });
    console.log(position);
  }

  render () {
    return (
      <div>
        <h1>{this.state.address}</h1>
        <div>
          <LocationPicker
            containerElement={ <div style={ {height: '100%'} } /> }
            mapElement={ <div style={ {height: '400px'} } /> }
            defaultPosition={defaultPosition}
            onChange={this.handleLocationChange}
          />
        </div>
      </div>
    )
  }
}