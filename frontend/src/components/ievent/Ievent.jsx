import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './ievent.css';

// export default class Ievent extends React.Component { render() { return ( )}}
const Ievent = () => {
    let event_info = JSON.parse(localStorage.getItem("event_info"));

    // Using event_info.id, load comments for that specific event.

        return (
            <div class="container">
                <div class="row">
                    <a href="/user" class="back">
                        <Icon.HouseAddFill/>
                        Events at *University Name*
                    </a>
                </div>
                <div class="row">
                    
                    <div class="col-lg-8" id="event-single">
                        <div class="row">
                            <p class="h3">{event_info.name}</p>
                        </div>
                        <div class="row">
                            <p class="h5">{event_info.date} at {event_info.time}</p>
                        </div>
                        <p>{event_info.description}</p>
                    </div>
                    <aside class="col-lg-4">
                        <div class="event-location hidden-md-down">
                            <h2 class="h5">Location</h2>
                        </div>
                        <div class="location-type-container d-flex mb-3">
                            <span class="h5 font-weigth-normal d-block"> <Icon.PinMap/> {event_info.location}</span>
                            <span class="event-location-url">
                                <a href="https://goo.gl/maps/oT5mkQHCNKSZLCBu6">[ View Location ]</a>
                            </span>
                        </div>
                        <div class="event-registration hidden-md-down card card-outline-primary my-4">
                            <div class="card-block">
                                <h2 class="h5">Event Registration</h2>
                            </div>
                            <button id="register" class="btn btn-primary" target="_blank" rel="noopener">
                                <p>Register Now <Icon.BoxArrowUpRight/></p>
                            </button>
                        </div>
                        <div class="event-contact vcard hidden-md-down">
                            <h2 class="h5">Contact:</h2>
                            <div class="event-contact-info">
                                <p class="h5 font-weight-normal">{event_info.organizer}</p>
                                <p class="ga-event">Email: {event_info.email}</p>
                                <p class="ga-event">Phone: {event_info.phone}</p>
                            </div>
                        </div>
                        <div class="social mb-3">
                            {/* Discover how to create custom links to social media */}
                            <a class="btn btn-sm btn-primary ga-event mr-1" target="_blank" 
                            href="https://www.facebook.com/sharer.php?u=https://events.ucf.edu/event/2780625/florida-folklore-society-annual-meeting/"> 
                            <p className="social"><Icon.Facebook/> Share </p>
                            </a>
                            <a class="btn btn-sm btn-primary ga-event mr-1" target="_blank" 
                            href="https://twitter.com/intent/tweet?text=UCF+Events%3A+Florida+Folklore+Society+annual+meeting&url=https://events.ucf.edu/event/2780625/florida-folklore-society-annual-meeting"> 
                            <p className="social"><Icon.Twitter/> Tweet</p>
                            </a>
                        </div>
                    </aside>
                </div>
            </div>
          )
}

export default Ievent