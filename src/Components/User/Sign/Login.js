import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

import { SigninUser } from '../../../Store/Actions';
import css from './Login.module.css';
import boy1 from '../../../assets/boy1.png';
import email from '../../../assets/email.png';
import googlelogo from '../../../assets/googlelogo.png';

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const SignInUser = async () => {
            dispatch(await SigninUser());
            history.push('/auth/profile');
    }
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
                            YOU ARE ONE <br /> STEP AWAY FROM <br />
                            <span>
                                JOINING US
                            </span>
                        </h1>

                        <button onClick={SignInUser}>
                            <img height={30} src={googlelogo} alt={googlelogo} />
                            &nbsp;&nbsp;
                            <span>
                                Sign in with Google
                            </span>
                        </button>

                        <div className={css.b_login_filler}></div>

                        <div className={`invisible ${css.b_login_bottom}`}>
                            <a className="invisible text-dark text-decoration-none d-flex justify-content-start align-items-center "
                                href="/email">
                                <img height={15} src={email} alt={email} />
                                &nbsp;
                                Sign in with Email
                            </a>
                            <small className="text-dark">
                                Don't have an account? &nbsp;
                                <Link to="/register">Register</Link>
                            </small>
                        </div>
                    </div>
                </div>


            </section>
            <Footer />
        </div>
    )
}

export default Login
