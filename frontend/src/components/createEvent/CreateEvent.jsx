import React, { useState, useEffect } from 'react';
import './createEvent.css';
import * as Icon from 'react-bootstrap-icons';
import { Map } from '../../components';

const CreateEvent = () => {
    let eventName;
    let eventDesc;
    let eventTime;
    let eventEmail;
    let eventType;
    let eventPhone;
    let eventRso;

    // Call getAdmin, if the array is empty keep, otherwise change to false.
    const [admins, setAdmins] = useState([]);
    const [message, setMessage] = useState("");

    let user_data = JSON.parse(localStorage.getItem("user_data"));
    console.log(user_data.id);

    let loc_data = JSON.parse(localStorage.getItem("loc_data"));
    console.log(loc_data);

    const getAdmin = async event => {
        console.log("entered");
        
        try {
            let obj = {user_id: user_data.id};
            let js = JSON.stringify(obj);
    
            const response = await
            fetch('http://localhost:8000/api/get_user_admin_rsos/',
            {method:'POST', body:js, headers: {'Content-Type': 'application/json'}});
    
            let r = await response.text();
            
            let res = JSON.parse(r);

            setAdmins(res.data.rsos)
            console.log(res.data.rsos)
    
            // If there is admin information, set admin = true.
            // Save admin data to array. Map array in array selection section.
        }
        catch (e)
        {
            console.log(e);
        }
        
    }

    const makeEvent = async event => {
        event.preventDefault();
        console.log("Making event");
        let eventMessage = document.querySelectorAll('p.eventMessage')[0];

        try {
            // Grab just date from eventDate.value;
            let obj = { name: eventName.value, description: eventDesc.value, time: eventTime.value, 
                        creator: user_data.id, host_rso: eventRso.value, date: eventTime.value.substr(0, 10), 
                        email: eventEmail.value, event_type: eventType.value, phone: eventPhone.value, 
                        loc_name: loc_data.address, longitude: loc_data.lng, latitude: loc_data.lat };

            let js = JSON.stringify(obj);
            // alert(js);

            const response = await
            fetch('http://127.0.0.1:8000/api/create_event/',
            {method:'POST', body:js, headers: {'Content-Type': 'application/json'}});

            let r = await response.text();

            let res = JSON.parse(r);
            console.log(res);

            console.log("RES RESULT " +res.data);

            console.log(res.data === undefined);

            if (res.data !== undefined)
            {
                console.log("no data");
                console.log(Object.keys(res)[0] + ":" + Object.values(res)[0]);
                eventMessage.classList.remove('green')
                eventMessage.classList.add('red');
                setMessage(Object.keys(res)[0] + ": " + Object.values(res)[0]);
            }
            else
            {
                eventMessage.classList.remove('red')
                eventMessage.classList.add('green');
                setMessage("Event succesfully created");
            }  
        }
        catch (e)
        {
            eventMessage.classList.remove('green')
            eventMessage.classList.add('red');
            setMessage(e);
        }
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
                            <input type="text" id="eventName" class="form-control" placeholder="Something Event"
                            required ref={ (c) => eventName = c}/>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="email1">Event Type: </label>
                            <select class="form-control" ref={ (c) => eventType = c }>
                                <option value="0">Public</option>
                                <option value="1">Private</option>
                                <option value="2">RSO</option>
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
                            required ref={ (c) => eventPhone = c}/>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="email">Contact Email</label>
                            <input type="email" id="email" class="form-control" placeholder="123@gmail.com"
                            required ref={ (c) => eventEmail = c}/>
                        </div>

                        {/* Only display if the user is admin of RSO */}
                        <div class="form-outline mb-4">
                            <label class="form-label" for="email">RSO</label>
                            <select class="form-control" required ref={ (c) => eventRso = c}>
                                {
                                    admins.map((admin) => <option value={admin.id}>{admin.name}</option>)
                                }
                            </select>
                        </div>  

                        <p className="green eventMessage">{message}</p>

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