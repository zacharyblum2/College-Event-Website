import React from 'react';
import './unicard.css';

const Unicard = () => {
  return (
    <div>
        <div class="card" style={{width: "650px"}}>
            <h5 class="card-header">University of Central Florida</h5>
            <div class="card-body">
                <h5 class="card-title">Orlando Florida</h5>
                <p class="card-text">UCF is located just outside Orlando and is a great Place
                to build knowledge etc...</p>
                
                {/* This should link to a page with all of the event information */}
                <a href="/event" class="btn btn-success stretched-link">Register Now</a>
            </div>
        </div>
    </div>
  )
}

export default Unicard