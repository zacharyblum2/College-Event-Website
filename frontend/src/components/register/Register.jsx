import React from 'react';
import './register.css';

const Register = () => {
  return (
    <section class="">
        <div class="px-4 py-5 px-md-5 text-center text-lg-start">
            <div class="container">
            <div class="row gx-lg-5 align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0">
                <h1 class="my-5 display-3 fw-bold ls-tight">
                    The best event <br />
                    <span class="text-primary">organizer</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                    quibusdam tempora at cupiditate quis eum maiores libero
                    veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
                </div>

                <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="card">
                    <div class="card-body py-5 px-md-5">
                    <form>
                        <button type="submit" class="btn btn-primary btn-block mb-4"
                        style={{backgroundColor: "hsl(189, 78%, 45%)"}}>
                        Login
                        </button>
                        <p>or sign up with:</p>
                        <button type="submit" class="btn btn-primary btn-block mb-4"
                        style={{backgroundColor: "hsl(189, 78%, 45%)"}}>
                        Sign up
                        </button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Register