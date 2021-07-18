import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';

import css from '../Login.module.css';
import boy1 from '../../../../assets/boy1.png';

function Reach() {
    const history = useHistory()
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
                            HOW CAN WE <br />
                            <span>
                                REACH
                            </span>
                            &nbsp;YOU ?
                        </h1>

                        <form>

                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="FULL NAME" />
                                </div>

                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="EM@IL" />
                                </div>

                                <div className="mb-3">
                                    <input type="number" className="form-control" placeholder="CONTACT" />
                                </div>


                                <button className="btn btn-outline-primary">Submit</button>

                        </form>
                        <br />
                        <small className="text-dark">
                            Go to <span className="text-primary" onClick={() => history.goBack()} >Back</span> | <Link className="text-decoration-none" to="/users">Home</Link>
                        </small>

                    </div>
                </div>


            </section>
            <Footer />
        </div>
    )
}

export default Reach
