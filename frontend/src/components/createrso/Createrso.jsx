import React from 'react';
import './createrso.css';
import * as Icon from 'react-bootstrap-icons';

const Createrso = () => {

    let rsoName;
    let email1;
    let email2;
    let email3;
    let email4;
    let user_data = JSON.parse(localStorage.getItem("user_data"));

    const makeRSO = async event => {
        // Create object with incremental rso_id value, name of RSO and admin id. 
        let emailList = [email1.value, email2.value, email3.value, email4.value]
        
        let obj = {rso_id: 1, name: rsoName.value, admin_id: user_data.id, 
            emails: emailList};
        
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

                <div class="form-outline mb-4">
                    <label class="form-label" for="email1">Person 1 Email</label>
                    <input type="email" id="email1" class="form-control" placeholder="123@gmail.com"
                    required ref={ (c) => email1 = c}/>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="email2">Person 2 Email</label>
                    <input type="email" id="email2" class="form-control" placeholder="123@gmail.com"
                    required ref={ (c) => email2 = c}/>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="email3">Person 3 Email</label>
                    <input type="email" id="email3" class="form-control" placeholder="123@gmail.com"
                    required ref={ (c) => email3 = c}/>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="email4">Person 4 Email</label>
                    <input type="email" id="email4" class="form-control" placeholder="123@gmail.com"
                    required ref={ (c) => email4 = c}/>
                </div>

                {/* Onclick will submit data to database and return to "/rso" */}
                <div class="form-outline mb-4 but">
                    <button type="submit" class="btn btn-success" onClick={makeRSO}>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Createrso