import React from 'react';
import {  Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

import css from './Login.module.css';
import boy1 from '../../../assets/boy1.png';
import email from '../../../assets/email.png';
import googlelogo from '../../../assets/googlelogo.png';

function Register() {
    return (
        <div className={css.b_login_container}>
        <div className={css.b_login_Navigation}>
            <Navigation />
        </div>
        <section className={`${css.b_login_section} pt-5 pb-5`}>

            <div className={css.b_login_img}>
                <img src={boy1} alt={boy1} />
            </div>


            <div className={css.b_login_content}>
                <div>
                    <h1>
                        JOIN OUR COMMUNITY <br /> FOR THE SAKE OF <br />
                        <span>
                        MUSIC
                        </span> 
                    </h1>

                    <button>
                        <img height={30} src={googlelogo} alt={googlelogo} />
                        &nbsp;&nbsp;
                        <span>
                        Sign up with Google
                        </span>
                    </button>

                    <div className={css.b_login_filler}></div>
                    
                    <div className={css.b_login_bottom}>
                        <a className="invisible text-dark text-decoration-none d-flex justify-content-start align-items-center " 
                            href="/email">
                            <img height={15} src={email} alt={email} />
                            &nbsp;
                            Sign up with Email
                        </a> 
                        <small className="text-dark">
                            Already have an account? &nbsp;
                            <Link to="/users/login">Login</Link>
                        </small>
                    </div>
                </div>
            </div>


        </section>
        <Footer />
        </div>
    )
}

export default Register