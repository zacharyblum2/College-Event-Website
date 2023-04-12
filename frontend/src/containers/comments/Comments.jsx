import React from 'react';
import './comments.css';

import { Comment } from '../../components';


// Load all information in regarding comments, including user_id. 
// For each comment, check if localStorage(user).user_id == comment.id, if so display edit or delete.
const comments = [
    { name: 'Martha Stewart', comment_id: 1, body: 'It was alright', rating: '2'},
    { name: 'LeBron James', comment_id: 2, body: 'It was okay', rating: '3'},
    { name: 'Martha Steward', comment_id: 3, body: 'I loved it!', rating: '4'},
]

// When we click on an event, store the event id in local storage.

// Call search comments, passing event id we have clicked on. 
// const comments = await fetch (fetch('http://127.0.0.1:8000/api/comments/',
//            {method:'GET', body: EVENT_ID, headers: {'Content-Type': 'application/json'}});

// comments.map((element)), I want to receive, name, description, rating and commenter id


const Comments = () => {
    let user_data = JSON.parse(localStorage.getItem("user_data"));
    let event_info = JSON.parse(localStorage.getItem("event_info"));
    let comment;
    let rating;
    // const [commentsLoaded, setComments] = useState(false);

    // Create object to later pass. 
    // let obj = {user_id: user_data.id, event_id: event_info.id, comment: comment.value, rating: rating.value};

    // Use eventInfo.id to search for all of the comments, store them in an array called comments
    // similar to above.

    // const getComments = async event => {
    //     event.preventDefault();
    //     console.log("GETTING COMMENTS");

    //     let obj = {event_id: event_info.id};
    //     let js = JSON.stringify(obj);

    //     const response = await 
    //     fetch ('http://127.0.0.1:8000/api/get_event_comments/', 
    //     {method:'GET', body:js, headers: {'Content-Type': 'application/json'}});

    //     let r = await response.text();
    //     let res = JSON.parse(r);
    //     console.log("Comments" + res);

    //     // What does an error return?

    //     // Given response, assign it to array comments.
    //     comments = res;
    // }

    const addComment = async event => {
        event.preventDefault();
        
        let obj = {event: event_info.id, user: user_data.id, body: comment.value, rating: rating.value}
        let js = JSON.stringify(obj);

        const response = await
        fetch('http://127.0.0.1:8000/api/comments/',
        {method:'POST', body:js, headers: {'Content-Type': 'application/json'}});

        let r = await response.text();

        let res = JSON.parse(r);

        console.log(res);
    }

    return (
        <div className="containerComment">
            <div class="row d-flex justify-content-center">
                <div class="col-md-8 col-lg-6">
                <div class="card shadow-0 border" style={{backgroundColor: "#f0f2f5"}}>
                    <div class="card-body p-4">
                        <form class="form-outline mb-4">
                            <input type="text" id="comment" class="form-control" placeholder="Type comment..." required ref={(c) => comment = c}/>
                            <br/>
                            <select class="form-control" name="universities" id="universities" required ref={(c) => rating = c}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                          </select>
                            <br/>
                            <button type="submit" class="btn btn-primary" onClick={addComment}>Add comment</button>
                        </form>

                        {/* {
                        comments.map((element) => <Comment user={element.user.name} comment_id={element.comment_id} body={element.body} rating={element.rating}/>)
                        }    */}

                        {
                            comments.map((comment) => <Comment user={comment.name} comment_id={comment.comment_id} body={comment.body} rating={comment.rating}/>)
                        }
                    </div>
                
                </div>
                </div>
            </div>
        </div>
    )
}

export default Comments