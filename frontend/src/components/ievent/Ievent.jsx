import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './ievent.css';
import { Map } from '../../components';

// export default class Ievent extends React.Component { render() { return ( )}}
const Ievent = () => {
    let user_data = JSON.parse(localStorage.getItem("user_data"));
    let event_info = JSON.parse(localStorage.getItem("event_info"));
    console.log(event_info);

    let tweet = `https://twitter.com/intent/tweet?text=${user_data.uni} Events: Come hangout at ${event_info.name}!`;

    // Using event_info.id, load comments for that specific event.

        return (
            <div class="container">
                <div class="row">
                    <a href="/user" class="back">
                        <Icon.HouseAddFill/>
                        Events at {user_data.uni}
                    </a>
                </div>
                <div class="row" id="ieventContent">
                    
                    <div class="col-md-4" id="event-single">
                        <div class="row">
                            <p class="h3">{event_info.name}</p>
                        </div>
                        <div class="row">
                            <p class="h5">{event_info.date} at {event_info.time}</p>
                        </div>
                        <p>{event_info.description}</p>
                        <br></br>
                        {/* <div class="event-registration hidden-md-down card card-outline-primary my-4">
                            <div class="card-block">
                                <h2 class="h5">Event Registration</h2>
                            </div>
                            <button id="register" class="btn btn-primary" target="_blank" rel="noopener">
                                <p>Register Now <Icon.BoxArrowUpRight/></p>
                            </button>
                        </div> */}
                        <div class="event-contact vcard hidden-md-down">
                            <h2 class="h5">Contact:</h2>
                            <div class="event-contact-info">
                                <p class="h5 font-weight-normal">{event_info.organizer}</p>
                                <p class="ga-event">Email: {event_info.email}</p>
                                <p class="ga-event">Phone: {event_info.phone}</p>
                            </div>
                        </div>
                        <div class="social mb-3">
                            {/* Create twitter sharing link, cannot do other social media*/}
                            <a class="btn btn-sm btn-primary ga-event mr-1" target="_blank" 
                            href={tweet}> 
                            <p className="social"><Icon.Twitter/> Tweet</p>
                            </a>
                        </div>
                    </div>
                    <aside class="col-lg-4">
                        <div class="event-location hidden-md-down">
                            <h2 class="h5">Location</h2>
                        </div>
                        <div class="location-type-container d-flex mb-3">
                            <span class="event-location-url">
                            <Map create={false} location={{name: event_info.location[0], lat: event_info.location[1], lng: event_info.location[2]}}/>
                            </span>
                        </div>
                    </aside>
                </div>
            </div>
          )
}

export default Ievent