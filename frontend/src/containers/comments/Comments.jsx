import React from 'react';
import './comments.css';

import { Comment } from '../../components';

// Get all of the comment data using API. 
// const comments = [
    // Maybe I can pass full name instead by getting it with API before passing comments.
    // {user_id: 'id', description: 'blah blah blah', rating: '5'}
// ]

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

                <Comment/>
                {/* comments.map((element) => <Comment user={element.user} description={element.description} rating={element.rating} />*/}
                </div>
            
            </div>
            </div>
        </div>
    </div>
  )
}

export default Comments