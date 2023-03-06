import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './ievent.css';

// export default class Ievent extends React.Component { render() { return ( )}}
export default class Ievent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            organizer: props.organizer,
            description: props.description,
            date: props.date,
            time: props.time,
            location: props.location
        }
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <a href="/user" class="back">
                        <Icon.HouseAddFill/>
                        Events at *University Name*
                    </a>
                </div>
                <div class="row">
                    {this.state.name}
                </div>
                <div class="row">
                    {this.state.date} at {this.state.time}
                </div>
                <div class="row">
                    <div class="col-lg-8" id="event-single">
                    {this.state.description}
                    </div>
                    <aside class="col-lg-4">
                        <div class="event-location hidden-md-down">
                            <h2 class="h5">Locations:</h2>
                        </div>
                        <div class="location-type-container d-flex mb-3">
                            <span class="h5 font-weigth-normal d-block"> <Icon.PinMap/> {this.state.location}</span>
                            <span class="event-location-url">
                                <a href="https://goo.gl/maps/oT5mkQHCNKSZLCBu6">[ View Website ]</a>
                            </span>
                        </div>
                        <div class="location-type-container d-flex mb-3">
                            <span class="h5 font-weight-normal">Virtual</span>
                            <span><a href="https://floridafolkloresociety.org" target="_blank">[ Open Virtual Location Link ]</a></span>
                        </div>
                        <div class="event-registration hidden-md-down card card-outline-primary my-4">
                            <div class="card-block">
                                <h2 class="h5">Event Registration</h2>
                                <p class="card-text">
                                https://www.eventbrite.com/e/florida-folklore-society-annual-meeting-2023-virtual-in-person-tickets-422845059957 
                                </p>
                            </div>
                            <a href="https://floridafolkloresociety.org" class="btn btn-primary w-100"
                            target="_blank" rel="noopener">Register Now
                            <Icon.BoxArrowUpRight/>
                            </a>
                        </div>
                        <div class="event-contact vcard hidden-md-down">
                            <h2 class="h5">Contact:</h2>
                            <div class="event-contact-info">
                                <p class="h5 font-weight-normal">{this.state.organizer}</p>
                                <a class="ga-event" href="mailto:Natalie.Underberg-Goode@ucf.edu">{this.state.email}</a>
                            </div>
                        </div>
                        <div class="social mb-3">
                            <a class="btn btn-sm btn-primary ga-event mr-1" target="_blank" 
                            href="https://www.facebook.com/sharer.php?u=https://events.ucf.edu/event/2780625/florida-folklore-society-annual-meeting/"> 
                            <Icon.Facebook/>
                            Share 
                            </a>
                            <a class="btn btn-sm btn-primary ga-event mr-1" target="_blank" 
                            href="https://twitter.com/intent/tweet?text=UCF+Events%3A+Florida+Folklore+Society+annual+meeting&url=https://events.ucf.edu/event/2780625/florida-folklore-society-annual-meeting"> 
                            <Icon.Twitter/>
                            Tweet 
                            </a>
                        </div>
                    </aside>
                </div>
            </div>
          )
    } 
}