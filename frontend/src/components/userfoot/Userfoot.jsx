import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './userfoot.css';

const Userfoot = () => {
  return (
    <>
        <footer class="text-center text-white" style={{backgroundColor: "#f1f1f1"}}>
            <div class="container pt-4">
                <section class="mb-4">
                <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.facebook.com/UCFCAB/"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><Icon.Facebook className='fab' style={{margin: "10px"}}/>
                </a>
                <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://twitter.com/ucf_cab?lang=en"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><Icon.Twitter className='fab' style={{margin: "10px"}}/>
                </a>
                <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.instagram.com/ucf_cab/?hl=en"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><Icon.Instagram className='fab' style={{margin: "10px"}}/>
                </a>
                <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.linkedin.com/company/ucf-cab/"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><Icon.Linkedin className='fab' style={{margin: "10px"}}/>
                </a>
                <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://github.com/zacharyblum2/College-Event-Website"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><Icon.Github className='fab' style={{margin: "10px"}}/>
                </a>
                </section>
            </div>

            <div class="text-center text-dark p-3">
                © 2023 Copyright: Zachary Blum, Gabe Mousa, Enzo Romano
            </div>
            </footer>
    </>
  )
}

export default Userfoot