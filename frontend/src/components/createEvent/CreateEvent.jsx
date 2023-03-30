import React, { useState } from 'react';
import './createEvent.css';
import * as Icon from 'react-bootstrap-icons';
import { Map } from '../../components';

const CreateEvent = () => {

    let user_data = JSON.parse(localStorage.getItem("user_data"));
    // let de

    const makeEvent = async event => {
        
        let obj = {rso_id: 1, name: "", admin_id: user_data.id};
        
        let js = JSON.stringify(obj);
        alert(js);

        // const response = await
        //     fetch('http://127.0.0.1:8000/api/rsos/',
        //     {method:'POST', body:js, headers: {'Content-Type': 'application/json'}});

        // 1. Check if all of the emails belong to users at the same University. 
        //    Response: Yes
        //        a. Create RSO, with status pending
        //        b. Add all users (including creator) to RSO
        //    Response: No
        //        a. Send back error message, which users are not belonging to the university 

        // let r = await response.text();

        // Check for error in response

        // Otherwise do nothing
    }

    //name: 'Fun in the sun', description: 'OUTSIDE TIME', date: '12/2/2019', time: '12:00pm', 
    //organizer: 'Emily Blunt', email: 'emilyblunt@gmail.com', phone: '9545931896', 
    //location: ["HEC 103", 28.6024, -81.2001

    return (
        <>
            {/* Store RSO name, and admin id (who creates it) */}
            <form id='build' action="">

                <div class="form-outline mb-4" id="back">
                    <a href="/user" class="btn btn-outline-success"><Icon.ArrowLeft/></a>
                </div>

                <div id="containForm">
                    <div id="left" class="form-outline mb-4">
                        <div class="form-outline mb-4">
                            <label class="form-label" for="rsoName">Event Name</label>
                            <input type="text" id="eventName" class="form-control" placeholder="Something Club"
                            required/>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="email1">Event Type: </label>
                            <select class="form-control">
                                <option value="0">Public</option>
                                <option value="1">Private</option>
                                <option value="2">RSO</option>
                            </select>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="description">Description</label>
                            <input type="text" id="description" class="form-control" placeholder="Describe your event"
                            required/>
                        </div>
                    </div>

                    <div id="right" class="form-outline mb-4">
                        <div class="form-outline mb-4">
                            <label class="form-label" for="datetime">Date and Time</label>
                            <input type="datetime-local" id="datetime" name="datetime" class="form-control"/>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="address">Address</label>
                            <input type="text" id="address" class="form-control" placeholder="123 Street"
                            required />
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="phone">Contact Phone Number</label>
                            <input type="tel" id="phone" class="form-control" placeholder="123-456-789"
                            pattern="[0-9]{3}-[0-9]{3]-[0-9]{3}"
                            required />
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="email">Contact Email</label>
                            <input type="email" id="email" class="form-control" placeholder="123@gmail.com"
                            required />
                        </div>
                    </div>
                    <div className="map">
                        <h5>Pick your event location</h5>
                        <Map />
                    </div>
                </div>                

                {/* Onclick will submit data to database and return to "/rso" */}
                <div id="makeEvent" class="form-outline mb-4 but">
                    <button type="submit" class="btn btn-success" onClick={makeEvent}>Submit</button>
                </div>
            </form>
        </>
    )
}

export default CreateEvent