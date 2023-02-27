import React from 'react';
import './comment.css';

// Get data from an api.
// Create a card for each data point. Display card. 

export default class Comments extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            rating: props.rating
        }
    }

    render() {
        return (
            <div class="card mb-4">
                <div class="card-body">
                    <p>{this.state.description}</p>
                
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                            <p class="small mb-0 ms-2">{this.state.name}</p>
                        </div>
                        <div class="d-flex flex-row align-items-center">
                            <p class="small text-muted mb-0">Rating: </p>
                            <p class="small text-muted mb-0">{this.state.rating}</p>
                        </div>
                    </div>
                </div>  
            </div>  
        )
    }
}