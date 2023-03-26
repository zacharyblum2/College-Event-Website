import React from 'react';
import './card.css';

export default class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      description: props.description,
      date: props.date,
      time: props.time,
      location: props.location,
      email: props.email,
      phone: props.phone,
      part: props.part
    }
  }

  // Function to store event information locally, for individual event page to load it.
  storeInformation() {
    let obj = {name: this.state.name, description: this.state.description, date: this.state.date, 
               time: this.state.time, location: this.state.location, email: this.state.email,
               phone: this.state.phone, part: this.state.part}

    localStorage.setItem("eventInfo", JSON.stringify(obj));
  }
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
                  <a href="/event" class="btn btn-success stretched-link" onClick={this.storeInformation()}>More Information</a>
              </div>
          </div>
      </div>
    )
  }
}