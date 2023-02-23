import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './ievent.css';

const Ievent = () => {
  return (
    <div class="container">
        <div class="row">
            <Icon.HouseAddFill/>
            Events at *University Name*
        </div>
        <div class="row">
            EVENT NAME
        </div>
        <div class="row">
            Day of Week, Month Day, Year Time to Day of Week, Month Day at Time
        </div>
        <div class="row">
            <div class="col-lg-8" id="event-single">
            The 2023 Florida Folklore Society annual meeting will take place on February 24, 2023.
            It is a hybrid event, with some portions online and others in person. This years theme is: 
            Folklorists at Work and Networking: Approaches to Researching and Promoting Folklore in 
            the Sunshine State and Beyond. There will be two virtual sessions featuring presentations 
            and discussions by former Florida Folklife Program directors and staff, and an in-person 
            presentation and discussion about the connections between contemporary maker culture and 
            folklife studies, to be held at the University of Central Florida (UCF) Downtown campus 
            in the NSCM/GaIM Maker Space. Lunch will also be served, catered by local soul food restaurant 
            Nikkis Place. More information, including a full agenda and registration link is available 
            at the Florida Folklore Society Website (https://floridafolkloresociety.org).
            </div>
            <aside class="col-lg-4">
                <div class="event-location hidden-md-down">
                    <h2 class="h5">Locations:</h2>
                </div>
                <div class="location-type-container d-flex mb-3">
                    <span class="h5 font-weigth-normal d-block"> <Icon.PinMap/> UCF Downtown: CMB 182A: 182A</span>
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
                    <a href="https://floridafolkloresociety.org" class="btn btn-primary w-100 stretched-link"
                    target="_blank" rel="noopener">Register Now
                    <Icon.BoxArrowUpRight/>
                    </a>
                </div>
                <div class="event-contact vcard hidden-md-down">
                    <h2 class="h5">Contact:</h2>
                    <div class="event-contact-info">
                        <p class="h5 font-weight-normal">Natalie Underberg-Goode</p>
                        <a class="ga-event" href="mailto:Natalie.Underberg-Goode@ucf.edu">Natalie.Underberg-Goode@ucf.edu</a>
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

export default Ievent