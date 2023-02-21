import React from 'react';
import './card.css';

const Card = () => {
  return (
    <div>
        <div class="card" style={{width: "650px"}}>
            <h5 class="card-header">Florida Folklore Society annual meeting</h5>
            <div class="card-body">
                <h5 class="card-title">at 12 a.m</h5>
                <p class="card-text">UCF Downtown: CMB 182A: | Virtual</p>
                <p class="card-text">The 2023 Florida Folklore Society annual meeting will take place
                on February 24, 2023. It is a hybrid event, with some portions online and others in 
                person. This years theme is: Folklorists at Work and Networking: Approaches to 
                Researching and Promoting Folklore in the Sunshine State and Beyond. There will be 
                two virtual sessions featuring presentations and discussions by former Florida 
                Folklife Program directors and staff, and an in-person presentation and discussion 
                about the connections between contemporary maker culture and folklife studies, 
                to be held at the University of Central Florida (UCF) Downtown campus in the 
                NSCM/GaIM Maker Space. Lunch will also be served, catered by local soul food 
                restaurant Nikkis Place</p>
                
                {/* This should link to a page with all of the event information */}
                <a href="#" class="btn btn-success">Register Now</a>
            </div>
        </div>
    </div>
  )
}

export default Card