import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted navbar-fixed-bottom">
      <section class="d-flex justify-content-center justify-content-lg-center align-items-center p-4 border-bottom">
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="https://www.facebook.com/UCFCAB/" class="me-4 text-reset">
            <Icon.Facebook className='fab' style={{margin: "10px"}}/>
          </a>
          <a href="https://twitter.com/ucf_cab?lang=en" class="me-4 text-reset">
            <Icon.Twitter style={{margin: "10px"}}/>
          </a>
          <a href="https://www.instagram.com/ucf_cab/?hl=en" class="me-4 text-reset">
            <Icon.Instagram style={{margin: "10px"}}/>
          </a>
          <a href="https://www.linkedin.com/company/ucf-cab/" class="me-4 text-reset">
            <Icon.Linkedin style={{margin: "10px"}}/>
          </a>
        </div>
      </section>
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <Icon.Gem style={{margin: "0px 5px 0px"}}/>
                Event At
              </h6>
              <p>
                University event management web application, here to organize all your events
                and campus wide RSOS!
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" class="text-reset">Universities</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Help</a>
              </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <Icon.HouseAdd style={{margin: "0px 5px 0px"}}/> 
                Oviedo, FL 32765, US</p>
              <p>
                <Icon.Envelope style={{margin: "0px 5px 0px "}}/>
                customersupport@eventat.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="text-center p-4">
        © 2023 Copyright: Zachary Blum, Gabriel Mousa, Enzo Romano
      </div>
    </footer>
  )
}

export default Footer