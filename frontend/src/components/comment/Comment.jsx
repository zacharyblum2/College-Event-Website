import React from 'react';
import './comment.css';

// Get data from an api.
// Create a card for each data point. Display card. 

const Comments = () => {
  return (       
    <div class="card mb-4">
        <div class="card-body">
            <p>Type your note, and hit enter to add it</p>
        
            <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                    <p class="small mb-0 ms-2">Martha</p>
                </div>
                <div class="d-flex flex-row align-items-center">
                    <p class="small text-muted mb-0">Rating: </p>
                    <p class="small text-muted mb-0">3</p>
                </div>
            </div>
        </div>  
    </div>               
  )
}

export default Comments