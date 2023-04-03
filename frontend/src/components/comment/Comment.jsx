import React, {useState} from 'react';
import './comment.css';

// Get data from an api.
// Create a card for each data point. Display card. 

// Store user_id of who made the comment, if this matches the logged in user
// display an edit and delete comment button. 

/// If user_id == commenter_id, unhide edit and delete.
let user_data = JSON.parse(localStorage.getItem('user_data'));
alert(user_data);



export default class Comments extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            rating: props.rating,
            // This is where we store the user who creates the comment id. 
            uid: props.id
        }

        // Update this state if user_data.id = commentor_id
        this.same = false;
    }

    render() {
        return (
            <div class="card mb-4">
                <div class="card-body">
                    <p>{this.state.description}</p>
                    <div id="com" class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                            <p class="small mb-0 ms-2">{this.state.name}</p>
                        </div>
                        <div class="d-flex flex-row align-items-center">
                            <p class="small text-muted mb-0">Rating: {this.state.rating}</p>
                        </div>
                        <div class="btns">
                            {this.same ? <>
                            <button class="btn btn-primary ">Edit</button>
                            <button class="btn btn-primary ">Delete</button>
                            </> : <></>}
                            
                        </div>
                    </div>
                </div>  
            </div>  
        )
    }
}