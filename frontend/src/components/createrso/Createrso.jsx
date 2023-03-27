import React, { useState } from 'react';
import './createrso.css';
import * as Icon from 'react-bootstrap-icons';

const Createrso = () => {

    let rsoName;
    let user_data = JSON.parse(localStorage.getItem("user_data"));

    const [message, setMessage] = useState("");

    function isJSON(str) {
        try 
        {
            JSON.parse(str);
        }
        catch (e)
        {
            return false;
        }

        return true;
    }

    const makeRSO = async event => {
        // Create object with incremental rso_id value, name of RSO and admin id. 
        
        let obj = {name: rsoName.value, university: user_data.uni, admin: user_data.id};
        
        let js = JSON.stringify(obj);
        console.log(js);

        try
        {
            const response = await
            fetch('http://localhost:8000/api/register_rso/',
            {method:'POST', body:js, headers: {'Content-Type': 'application/json'}});
            
            let r = await response.text();

            if(!isJSON(r))
            {
                console.log(r);
                setMessage(r);
            }
            else
            {
                setMessage('');
            }
        }
        catch (e)
        {
            console.log(e.toString());
            return;
        }
        
        // 1. Check if all of the emails belong to users at the same University. 
        //    Response: Yes
        //        a. Create RSO, with status pending
        //        b. Add all users (including creator) to RSO
        //    Response: No
        //        a. Send back error message, which users are not belonging to the university 


        // Check for error in response

        // Otherwise do nothing
    }

    return (
        <>
            {/* Store RSO name, and admin id (who creates it) */}
            <form id='create' action="">
                <div class="form-outline mb-4">
                    <a href="/rsos" class="btn btn-outline-success"><Icon.ArrowLeft/></a>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="rsoName">RSO Name</label>
                    <input type="text" id="rsoName" class="form-control" placeholder="Something Club"
                    required ref={ (c) => rsoName = c}/>
                </div>

                {/* Onclick will submit data to database and return to "/rso" */}
                <div class="form-outline mb-4 but">
                    <button type="submit" class="btn btn-success" onClick={makeRSO}>Submit</button>
                </div>
                <p>{message}</p>
            </form>
        </>
    )
}

export default Createrso