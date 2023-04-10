import React, { useState, useEffect } from 'react';
import './createEvent.css';
import * as Icon from 'react-bootstrap-icons';
import { Map } from '../../components';

const CreateEvent = () => {
    let eventName;
    let eventDesc;
    let eventRSO = -1;
    let eventTime;
    let eventEmail;
    let eventType;
    let eventPhone;
    let eventLon;
    let eventLat;
    let eventLoc;

    // Call getAdmin, if the array is empty keep, otherwise change to false.
    const [admin, setAdmin] = useState(false);

    let user_data = JSON.parse(localStorage.getItem("user_data"));
    console.log(user_data.id);

    let loc_data = JSON.parse(localStorage.getItem("loc_data"));
    console.log(loc_data);

    const getAdmin = async event => {
        console.log("entered");
        
        let obj = {id: user_data.id};
        let js = JSON.stringify(obj);

        const response = await
        fetch('http://localhost:8000/api/get_user_admin_rsos/',
        {method:'GET', body:js, headers: {'Content-Type': 'application/json'}});

        let res = response.text();
        console.log(res);

        // If there is admin information, set admin = true.
        // Save admin data to array. Map array in array selection section.
    }

    const makeEvent = async event => {
        event.preventDefault();

        // Grab just date from eventDate.value;
        let obj = {name: eventName.value, description: eventDesc.value, creator: user_data.id, host_rso: eventRSO.value,
                   date: eventTime.value.substr(0, 9), time: eventTime.value, email: eventEmail.value, event_type: eventType.value,
                   phone: eventPhone.value, longitude: loc_data.lng, latitude: loc_data.lat, loc_name: loc_data.address};
        
        let js = JSON.stringify(obj);
        alert(js);

        const response = await
            fetch('http://127.0.0.1:8000/api/events/',
            {method:'POST', body:js, headers: {'Content-Type': 'application/json'}});

        // 1. Check if all of the emails belong to users at the same University. 
        //    Response: Yes
        //        a. Create RSO, with status pending
        //        b. Add all users (including creator) to RSO
        //    Response: No
        //        a. Send back error message, which users are not belonging to the university 

        let r = await response.text();

        let res = JSON.parse(r);
        
        if (Object.keys(r).length !== 12)
        {
            console.log(res);
        }
        else
        {
            alert("Hello!");
        }

        // Check for error in response

        // Otherwise do nothing
    }

    useEffect(() => {
        getAdmin();
    }, []);

    //name: 'Fun in the sun', description: 'OUTSIDE TIME', date: '12/2/2019', time: '12:00pm', 
    //organizer: 'Emily Blunt', email: 'emilyblunt@gmail.com', phone: '9545931896', 
    //location: ["HEC 103", 28.6024, -81.2001

    return (
        <>
            {/* Store RSO name, and admin id (who creates it) */}
            <form id='build' action="">

                <div id="containForm">
                    <div class="form-outline mb-4" id="back">
                        <a href="/user" class="btn btn-outline-success"><Icon.ArrowLeft/></a>
                    </div>

                    <div id="left" class="form-outline mb-4">
                        <div class="form-outline mb-4">
                            <label class="form-label" for="rsoName">Event Name</label>
                            <input type="text" id="eventName" class="form-control" placeholder="Something Club"
                            required ref={ (c) => eventName = c}/>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="email1">Event Type: </label>
                            <select class="form-control" ref={ (c) => eventType = c }>
                                <option value="0">Public</option>
                                <option value="1">Private</option>
                                { admin ? <><option value="2">RSO</option></> : <></>}
                            </select>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="description">Description</label>
                            <input type="text" id="description" class="form-control" placeholder="Describe your event"
                            required ref={ (c) => eventDesc = c}/>
                        </div>
                    </div>

                    <div id="right" class="form-outline mb-4">
                        <div class="form-outline mb-4">
                            <label class="form-label" for="datetime">Date and Time</label>
                            <input type="datetime-local" id="datetime" name="datetime" class="form-control"
                            ref={ (c) => eventTime = c}/>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="phone">Contact Phone Number</label>
                            <input type="tel" id="phone" class="form-control" placeholder="123-456-789"
                            pattern="[0-9]{3}-[0-9]{3]-[0-9]{3}"
                            required ref={ (c) => eventPhone = c}/>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="email">Contact Email</label>
                            <input type="email" id="email" class="form-control" placeholder="123@gmail.com"
                            required ref={ (c) => eventEmail = c}/>
                        </div>

                        {/* Only display if the user is admin of RSO */}
                        { admin ? 
                            <>
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="email">RSO</label>
                                    <select class="form-control" ref={ (c) => eventRSO = c}>
                                        <option value="0">RSO1</option>
                                        <option value="1">RSO2</option>
                                        <option value="2">RSO3</option>
                                    </select>
                                </div>  
                            </>
                        : <></>}

                    </div>
                    
                    <div className="map">
                        {/* Get eventLoc, eventLon, eventLat from Map */}
                        <h5>Pick your event location</h5>
                        <Map create={true}/>
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