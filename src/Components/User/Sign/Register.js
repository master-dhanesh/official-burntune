import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { SigninUser, RegisterNewUser } from '../../../Store/Actions';
import { useDispatch } from 'react-redux';

import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

import css from './Login.module.css';
import boy1 from '../../../assets/boy1.png';
import email from '../../../assets/email.png';
import googlelogo from '../../../assets/googlelogo.png';

function Register() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { instrument } = useParams();

    const RegisterUser = async () => {
        console.log('click')
        dispatch(await SigninUser(instrument, history));
        // history.push('/auth/profile');
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        const newUser = { name, email, password, instrument };

        dispatch(await RegisterNewUser(newUser));
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
                            JOIN OUR COMMUNITY <br /> FOR THE SAKE OF <br />
                            <span>
                                MUSIC
                            </span>
                        </h1>

                        <button onClick={RegisterUser} >
                            <img height={30} src={googlelogo} alt={googlelogo} />
                            &nbsp;&nbsp;
                            <span>
                                Sign in with Google
                            </span>
                        </button>

                        <div className=" d-flex w-100 justify-content-between align-items-center">
                            <hr style={{ width: '45%' }} className="bg-dark text-dark" />
                            <span className="text-dark">OR</span>
                            <hr style={{ width: '45%' }} className="bg-dark text-dark" />
                        </div>

                        <form onSubmit={SubmitHandler}>

                            <div className="mb-3">
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="FULL NAME" />
                            </div>

                            <div className="mb-3">
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="EM@IL" />
                            </div>

                            <div className="mb-3">
                                <input
                                    minLength={8}
                                    required
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="PASSWORD" />
                            </div>


                            <button type="submit" className="btn btn-outline-primary">Sign Up</button>

                        </form>

                        {/* <div className={css.b_login_filler}></div> */}

                        <div className={css.b_login_bottom}>
                            <a className=" invisible text-dark text-decoration-none d-flex justify-content-start align-items-center "
                                href="/email">
                                <img height={15} src={email} alt={email} />
                                &nbsp;
                                Sign up with Email
                            </a>
                            <small className="text-dark">
                                Already have an account? &nbsp;
                                <Link to="/login">Login</Link>
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
