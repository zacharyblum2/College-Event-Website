import React, { useState } from 'react'
import './signup.css';

const Signup = () => {
  let signupName;
  let signupEmail;
  let signupPassword;

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

  const doSignup = async event =>
  {
    let obj = {name: signupName.value, email: signupEmail.value, password: signupPassword.value};
    let js = JSON.stringify(obj);

    try
    {
      const response = await
      fetch('http://127.0.0.1:8000/api/signup/',
            {method:'POST', body:js, headers: {'Content-Type': 'application/json'}});

      let r = await response.text();

      if (!isJSON(r))
      {
        setMessage(r);
      }
      else
      {
          let res = JSON.parse(r);

          // Add university to this later.
          let user = {name: res.data.name, id: res.data.id, type: res.data.type}
          
          // Store information in local storage to be accessed by other windows.
          localStorage.setItem('user_data', JSON.stringify(user));

          setMessage('');
          window.location.href='/user';
        }
    }
    catch (e)
    {
      alert(e.toString());
      return;
    }
}

  return (
    <section class="vh-100">
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
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" class="form-control" required ref={(c) => signupName = c}/>
                          <label class="form-label" for="form3Example1c">Your Name</label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example3c" class="form-control" required ref={(c) => signupEmail = c}/>
                          <label class="form-label" for="form3Example3c">Your Email</label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="password" minlength="5" id="form3Example4c" class="form-control" required ref={(c) => signupPassword = c}/>
                          <label class="form-label" for="form3Example4c">Password</label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4cd" class="form-control" required/>
                          <label class="form-label" for="form3Example4cd">Repeat your password</label>
                        </div>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-5">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label class="form-check-label" for="form2Example3">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <a href="/user" class="btn btn-success btn-lg" onClick={doSignup}>Register</a>
                      </div>
                      <span id="signupResult">{message}</span>
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