import React, { useState } from 'react'
import './login.css';

const Login = () => {

    var loginEmail;
    var loginPassword;

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
    
    const doLogin = async event =>
    {
        event.preventDefault();
        
        let obj = {email: loginEmail.value, password: loginPassword.value};
        let js = JSON.stringify(obj);

        // Use the API's here, we will pass it js. 
        try
        {
            const response = await 
            // Check if correct url for api.
            // How can I test this?
            fetch('http://localhost:8000/api/login/',
            {method:'POST', body:js, headers: {'Content-Type': 'application/json'}});
            
            let r = await response.text();

            // If not JSON, it is an error, set message to it.
            if (!isJSON(r))
            {
                console.log(r);
                setMessage(r);
            }
            else 
            {
                let res = JSON.parse(r)

                // RESPONSE SHOULD RETURN UNIVERSITY NAME AS WELL
                let user = {name: res.data.name, id: res.data.user_id, type: res.data.user_type, uni: res.data.university}
                localStorage.setItem('user_data', JSON.stringify(user));

                // Pass to new page.
                setMessage(' ');
                window.location.href='/user';
            }
        }
        catch (e)
        {
            console.log(e.toString());
            return;
        }

        console.log('do it ' + loginEmail.value + ' ' + loginPassword.value);
    }

  return (
    <section class="">
        <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5" id="image">
                <img src="./stock.jpeg" class="img-fluid" alt="Sample image"/>
            </div>
            <div class="col-md-8 col-lg-6 col-xl-3 offset-xl-1">
                <form>
                <div class="d-flex flex-row align-items-center justify-content-center">
                    <p class="lead fw-normal mb-0 me-3" style={{padding: '15px'}}>Sign in with</p>
                </div>
                <div class="form-outline mb-4">
                    <input type="email" id="form3Example3" class="form-control form-control-lg"
                    placeholder="Enter a valid email address" required ref={ (c) => loginEmail = c} />
                    <label class="form-label" for="form3Example3" >Email address</label>
                </div>
                <div class="form-outline mb-3">
                    <input type="password" id="form3Example4" class="form-control form-control-lg"
                    placeholder="Enter password" required ref={ (c) => loginPassword = c}/>
                    <label class="form-label" for="form3Example4">Password</label>
                </div>

                <div class="d-flex justify-content-between align-items-center">
                    <div class="form-check mb-0">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label class="form-check-label" for="form2Example3">
                        Remember me
                    </label>
                    </div>
                    <a href="#!" class="text-body">Forgot password?</a>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2" id="login">
                    <span id="loginResult">{message}</span>
                    <button class="btn btn-success btn-lg" onClick={doLogin}>Login</button>
                    <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#signupContainer"
                        style={{color: "#28a745"}}>Register</a></p>
                </div>
                </form>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Login