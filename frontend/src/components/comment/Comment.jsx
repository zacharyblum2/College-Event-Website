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
        
        if (this.uid === user_data.id)
            this.same = true;

        // Update this state if user_data.id = commentor_id
        this.same = true;
        this.editMode = false;
        this.message = '';
        this.edit = this.edit.bind(this);
        this.done = this.done.bind(this);
        //this.delete = this.delete.bind(this);
    }

    // Edit Function
    // comment_id, body, rating

    // Delete Function
    // Pass comment_id to be deleted
    edit()
    {
        let paragraph = document.getElementsByClassName(this.state.c_id);
        this.editMode = true;

        paragraph[0].contentEditable = true;
        paragraph[0].style.backgroundColor = "#dddbdb";

        paragraph[1].contentEditable = true;
        paragraph[1].style.backgroundColor = "#dddbdb";
    }

    async done()
    {
        let paragraph = document.getElementsByClassName(this.state.c_id);
        this.editMode = false;

        // Create object to pass. 
        // let obj = {comment_id: this.state.c_id, body: paragraph[0].text, rating: parseInt(paragraph[1].text)}
        // let js = JSON.stringify(obj);

        // const response = await
        // fetch('http://localhost:8000/api/edit_comment/', 
        // {method:'POST', body:js, headers: {'Content-Type': 'application/json'}});

        // let r = response.text();
        // let res = JSON.stringify(r);

        // Check if error message. If not, complete below.

            paragraph[0].contentEditable = false;
            paragraph[0].style.backgroundColor = "white";

            paragraph[1].contentEditable = false;
            paragraph[1].style.backgroundColor = "white";
        
        // If error. Print out error message. 
        // this.message = res;
    }

    async delete()
    {
        console.log("delete");

        // If we do want to delete, perform delete.
        if (window.confirm("Do you wish to delete?") === true)
        {
            // let obj = {comment_id: this.state.c_id};
            // let js = JSON.stringify(obj);

            // // Perform API call here.
            // const response = await 
            // fetch('http://localhost:8000/api/delete_comment/',
            // {method:'POST', body:js, headers: {'Content-Type': 'application/json'}});

            // let r = response.text();
        }
    }
    
    render() {
        return (
            <div class="card mb-4">
                <div class="card-body">
                    <p className={this.state.c_id}>{this.state.body}</p>
                    <div id="com" class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                            <p class="small mb-0 ms-2">{this.state.name}</p>
                        </div>
                        <div class="d-flex flex-row align-items-center">
                            <p class="small text-muted mb-0">Rating: <p className={this.state.c_id}>{this.state.rating}</p></p>
                        </div>
                        <div class="btns">
                            {this.same ? <>
                            {/* Edit should make popup to change information. 
                                Close button will close and no update, update will call update. */}
                            <button type="submit" class="btn btn-primary" onClick={this.edit}>Edit</button>

                            {/* Delete should pop confirmation box, if box click yes
                                delete the comment. */}
                            <button type="submit" class="btn btn-primary">Delete</button>
                            </> : <> </>
                            }
                        </div>
                    </div>
                    {this.editMode ? 
                    <><button type="submit" class="btn btn-primary" onClick={this.done}>Done</button></>
                    : <></>}
                    {this.message}
                </div>  
            </div>  
        )
    }
}