import React, {useState} from 'react';
import './comment.css';

// Get data from an api.
// Create a card for each data point. Display card. 

// Store user_id of who made the comment, if this matches the logged in user
// display an edit and delete comment button. 

/// If user_id == commenter_id, unhide edit and delete.
let user_data = JSON.parse(localStorage.getItem('user_data'));


export default class Comments extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: props.user,
            c_id: props.comment_id,
            body: props.body,
            rating: props.rating,
            // This is where we store the user who creates the comment id. 
            uid: props.id
        }
        
        // if (uid === user_data.id)
        //     this.same = true;

        // Update this state if user_data.id = commentor_id
        this.same = false;
    }

    // Edit Function
    // comment_id, body, rating

    // Delete Function
    // Pass comment_id to be deleted
    
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
                            {/* Edit should make popup to change information. 
                                Close button will close and no update, update will call update. */}
                            <button class="btn btn-primary">Edit</button>

                            {/* Delete should pop confirmation box, if box click yes
                                delete the comment. */}
                            <button class="btn btn-primary">Delete</button>
                            </> : <></>}
                            
                        </div>
                    </div>
                </div>  
            </div>  
        )
    }
}