import React from 'react';
import './card.css';

export default class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      description: props.description,
      date: props.date,
      time: props.time,
      location: props.location,
      organizer: props.organizer,
      email: props.email,
      phone: props.phone,
      part: props.part
    }

    // Allows functions to access this.state properties.
    this.storeInformation = this.storeInformation.bind(this);
  }

  // Function to store event information locally, for individual event page to load it.
  storeInformation() {
    console.log(this.state.name);
    let obj = {id: this.state.id, name: this.state.name, description: this.state.description, date: this.state.date, 
               time: this.state.time, location: this.state.location, organizer: this.state.organizer, 
               email: this.state.email, phone: this.state.phone, part: this.state.part}
    
    console.log(JSON.stringify(obj));
    localStorage.removeItem("eventInfo");
    localStorage.setItem("event_info", JSON.stringify(obj));

    window.location.href='/event';
  };;

  render() {
    return (
      <div>
          <div class="card" style={{width: "500px"}}>
              <h5 class="card-header">{this.state.name}</h5>
              <div class="card-body">
                  <h5 class="card-title">at {this.state.time}</h5>
                  <p class="card-text">{this.state.location}</p>
                  <p class="card-text">{this.state.description}</p>
                  
                  {/* This should link to a page with all of the event information */}
                  <button class="btn btn-success stretched-link" onClick={this.storeInformation}>More Information</button>
              </div>
          </div>
      </div>
    )
  }
}