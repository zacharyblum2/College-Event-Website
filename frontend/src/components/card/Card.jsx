import React from 'react';
import './card.css';
import * as Icon from 'react-bootstrap-icons'

export default class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      event_id: props.id,
      name: props.name,
      description: props.description,
      creator: props.creator,
      rso: props.rso, 
      date: props.date,
      time: props.time,
      email: props.email,
      phone: props.phone,
      lng: props.lng,
      lat: props.lat,
      loc: props.loc_name,
      sub_time: props.time.substring(12, 16)
    }
    // Allows functions to access this.state properties.
    this.storeInformation = this.storeInformation.bind(this);
  }

  // Function to store event information locally, for individual event page to load it.
  storeInformation() {
    console.log(this.state.name);
    let obj = {event_id: this.state.event_id, name: this.state.name, description: this.state.description, 
               date: this.state.date, time: this.state.time, email: this.state.email, 
               phone: this.state.phone, lng: this.state.lng, lat: this.state.lat, loc: this.state.loc}
    
    console.log(JSON.stringify(obj));
    localStorage.removeItem("eventInfo");
    localStorage.setItem("event_info", JSON.stringify(obj));

    window.location.href='/event';
  };;

  render() {
    return (
      <div>
          <div class="card" style={{width: "500px"}}>
              <h4 class="card-header">{this.state.name}</h4>
              <div class="card-body">
                  <h5 class="card-title">at {this.state.sub_time} on {this.state.date} </h5>
                  <h6 class="card-text location"><Icon.Pin/> {this.state.loc}</h6>
                  <p class="card-text">{this.state.description}</p>
              </div>
              <div>
                <button class="btn btn-success stretched-link more" onClick={this.storeInformation}>More Information</button>
                
              </div>
          </div>
      </div>
    )
  }
}