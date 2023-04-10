import React, { useState } from 'react'
import './signup.css';

const Signup = () => {
  let signupName;
  let signupEmail;
  let signupPassword;
  let signupUni;

  const [message, setMessage] = useState("");
  const [unis, setUnis] = useState("");

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

  const doSignup = async event =>
  {
    event.preventDefault();
    // Correct object, change later.
    // let obj = {name: signupName.value, password: signupPassword.value, uni: signupUni.value, email: signupEmail.value, user_type: 0};
    let obj = {name: signupName.value, password: signupPassword.value, email: signupEmail.value, user_type: 0, university: signupUni.value };
    let js = JSON.stringify(obj);

    try
    {
      const response = await fetch('http://127.0.0.1:8000/api/register/',
            {method:'POST', body:js, headers: {accept: 'application/json'}});
        

      let r = await response.text();

      // Then we have an error
      if (!isJSON(r))
      {
        console.log(r);
        setMessage(r);
      }
      else
      {
        let res = JSON.parse(r);

        // Add university to this later.
        let user = {name: signupName.value, email: signupEmail.value, id: res.data.user_id, type: 0, uni: signupUni.value}
        // Store information in local storage to be accessed by other windows.
        localStorage.setItem('user_data', JSON.stringify(user));

        setMessage('');
        window.location.href='/user';
      }
    }
    catch (e)
    {
      console.log(e.toString());
      return;
    }

    console.log('do it ' + signupEmail.value + ' ' + signupPassword.value);
}

const searchUnis = async event =>
{
  // Blank get request of 'http://127.0.0.1:8000/api/universities/'
  // Store results inside unis
  // Map unis results as options.
  const response = await fetch('http://localhost:8000/api/universities/',
            {method:'GET', headers: {'Content-Type': 'application/json'}});

  let r = await response.text();

  let res = JSON.parse(r);
  setUnis(res);
  // {uni_name: name, description: description..}, {uni_name: name, description: description}
}

  return (
    <section class="vh-100" onLoad={searchUnis}>
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form class="mx-1 mx-md-4">

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example1c">Your Name</label>
                          <input type="text" id="form3Example1c" class="form-control" required ref={(c) => signupName = c}/>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example3c">Your Email</label>
                          <input type="email" id="form3Example3c" class="form-control" required ref={(c) => signupEmail = c}/> 
                        </div>
                      </div>
                      
                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example3c">Your University</label>
                          <select class="form-control" name="universities" id="universities" required ref={(c) => signupUni = c}>
                            {unis.map((uni) => <option value={uni.uni_name}>{uni.description}</option>)}
                          </select>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4c">Password</label>
                          <input type="password" minLength="5" id="form3Example4c" class="form-control" required ref={(c) => signupPassword = c}/>
                        </div>
                      </div>
                      
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4" id="result">
                        <span id="signupResult">{message}</span>
                        <button class="btn btn-success btn-lg" onClick={doSignup}>Register</button>
                      </div>
                    </form>

                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid" alt="Sample image"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup