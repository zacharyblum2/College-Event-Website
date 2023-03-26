import React from 'react';
import './comments.css';

import { Comment } from '../../components';


// Load all information in regarding comments, including user_id. 
// For each comment, check if localStorage(user).user_id == comment.id, if so display edit or delete.
const comments = [
    { name: 'Martha Stewart', description: 'It was alright', rating: '2'},
    { name: 'LeBron James', description: 'It was okay', rating: '3'},
    { name: 'Martha Steward', description: 'I loved it!', rating: '4'},
]

// When we click on an event, store the event id in local storage.

// Call search comments, passing event id we have clicked on. 
// const comments = await fetch (fetch('http://127.0.0.1:8000/api/comments/',
//            {method:'GET', body: EVENT_ID, headers: {'Content-Type': 'application/json'}});

// comments.map((element)), I want to receive, name, description, rating and commenter id


const Comments = () => {
  return (
    <div>
        <div class="row d-flex justify-content-center">
            <div class="col-md-8 col-lg-6">
            <div class="card shadow-0 border" style={{backgroundColor: "#f0f2f5"}}>
                <div class="card-body p-4">
                <div class="form-outline mb-4">
                    <input type="text" id="addANote" class="form-control" placeholder="Type comment..." />
                    <label class="form-label" for="addANote">+ Add a note</label>
                </div>

                {
                comments.map((element) => <Comment name={element.name} description={element.description} rating={element.rating}/>)
                }   

                </div>
            
            </div>
            </div>
        </div>
    </div>
  )
}

export default Comments