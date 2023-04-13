import React, {useState} from 'react';
import './comment.css';
import * as Icon from 'react-bootstrap-icons';

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
            comment_id: props.comment_id,
            body: props.body,
            rating: props.rating,
            user_id: props.user_id
        }
        
        this.same = true;
        this.editMode = false;
        this.message = '';
        this.edit = this.edit.bind(this);
        this.done = this.done.bind(this);
        this.delete = this.delete.bind(this);

        // Don't display edit if not your comment.
        if (this.state.user_id !== parseInt(user_data.id))
        {
            this.same = false;
        }

        
    }

    // Edit Function
    // comment_id, body, rating

    // Delete Function
    // Pass comment_id to be deleted
    edit()
    {
        let paragraph = document.getElementsByClassName(this.state.comment_id);
        let btns = document.querySelectorAll(`[id="${this.state.comment_id}"]`);
        let donebtn = btns[1];
        let editbtn = btns[0];
        let deletebtn = btns[2];

        paragraph[0].contentEditable = true;
        paragraph[0].style.border = 'solid';
        paragraph[0].style.borderWidth = '1px';
        paragraph[0].style.borderColor = '#007bff';

        paragraph[1].contentEditable = true;
        paragraph[1].style.border = 'solid';
        paragraph[1].style.borderWidth = '1px';
        paragraph[1].style.borderColor = '#007bff';

        // Display done block.
        donebtn.style.display="block";

        // Hide edit block.
        editbtn.style.display="none";

        // Hide delete button.
        deletebtn.style.display="none";
    }

    async done()
    {
        let paragraph = document.getElementsByClassName(this.state.comment_id);
        let btns = document.querySelectorAll(`[id="${this.state.comment_id}"]`);
        let donebtn = btns[1];
        let editbtn = btns[0];
        let deletebtn = btns[2];

        if (parseInt(paragraph[0].textContent) < 1 || parseInt(paragraph[0].textContent) > 5)
        {
            document.getElementById('commentMessage').textContent = 'Rating must be between 1 and 5.';
        }
        else
        {
            document.getElementById('commentMessage').textContent = '';

            // Create object to pass. 
            try 
            {
                let obj = {comment_id: this.state.comment_id, body: paragraph[1].textContent, rating: paragraph[0].textContent}
                let js = JSON.stringify(obj);
                const response = await
                fetch('http://localhost:8000/api/edit_comment/', 
                {method:'POST', body:js, headers: {'Content-Type': 'application/json'}});
    
                let r = await response.text();
                let res = JSON.parse(r);

                paragraph[0].contentEditable = false;
                paragraph[0].style.backgroundColor = "white";
                paragraph[0].style.border = 'none';

                paragraph[1].contentEditable = false;
                paragraph[1].style.backgroundColor = "white";
                paragraph[1].style.border = 'none';

                donebtn.style.display="none";
                editbtn.style.display="block";
                deletebtn.style.display="block";
            }
            catch (e)
            {
                document.getElementById('commentMessage').textContent = e;
            }
        }
    }

    async delete()
    {
        console.log("delete");

        // If we do want to delete, perform delete.
        if (window.confirm("Do you wish to delete?"))
        {
            console.log("DELETING");

            try
            {
                let obj = {comment_id: this.state.comment_id};
                let js = JSON.stringify(obj);
    
                // // Perform API call here.
                const response = await 
                fetch('http://localhost:8000/api/delete_comment/',
                {method:'DELETE', body:js, headers: {'Content-Type': 'application/json'}});
                window.location.reload(true);

            }
            catch (e)
            {
                document.getElementById('commentMessage').textContent = e;
            }
            
        }
    }
    
    render() {
        return (
            <div class="card mb-4">
                <div class="card-body">
                    <h6 class="mb-0 ms-2"><Icon.PersonCircle/> {this.state.name}</h6>
                    <div id="com" class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                            <p className={this.state.comment_id}>{this.state.rating}</p>
                            <p>/5</p>
                        </div>
                        <div class="d-flex flex-row align-items-center">
                            <p className={this.state.comment_id}>{this.state.body}</p>
                        </div>
                        <div class="btns">
                            {this.same ? <>
                            {/* Edit should make popup to change information. 
                                Close button will close and no update, update will call update. */}
                            <button type="submit" class="btn btn-primary" id={this.state.comment_id} onClick={this.edit}>Edit</button>
                            <button type="submit" className="btn btn-primary" id={this.state.comment_id} style={{'display': 'none'}} onClick={this.done}>Done</button>

                            <button type="submit" class="btn btn-primary" id={this.state.comment_id} onClick={this.delete}>Delete</button>
                            </> : <></>
                            }
                        </div>
                    </div>
                    
                    <p id='commentMessage' style={{'color': 'red'}}></p>
                </div>  
            </div>  
        )
    }
}