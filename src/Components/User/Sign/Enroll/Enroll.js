import React from 'react';
import { Link, useLocation, useHistory, useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';

import css from '../Login.module.css';
import boy1 from '../../../../assets/boy1.png';

function Enroll() {
    const location = useLocation();
    const history = useHistory();
    const params = useParams();
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
                            LET US HELP YOURSELF <br /> TO BE AN AWESOME <br />
                            <span>
                                MUSICIAN
                            </span>
                        </h1>


                        <ol className="list-group list-group-numbered">

                            <li className={`${css.shadow} list-group-item d-flex justify-content-between align-items-start`}>
                                <div className="ms-2 me-auto">
                                    <div className={`${css.roboto} fw-bold`}>
                                    <Link  to={`/register/${params.instrument}`}>
                                        <span className="text-dark">Join The Program</span> 
                                        </Link>
                                    </div>
                                    <span className={css.opensans}>Enroll for the Membership Program to start learning Music</span>
                                   
                                </div>
                                {/* <span className="badge bg-primary rounded-pill">14</span> */}
                            </li>

                            <li className={`${css.shadow} list-group-item d-flex justify-content-between align-items-start`}>
                                <div className="ms-2 me-auto">
                                    <div className={`${css.roboto} fw-bold`}>
                                    <Link  to={`${location.pathname}/trial`}>
                                        <span className="text-dark">Book a Free Trial</span> 
                                        </Link>
                                    </div>
                                    <span className={css.opensans}>Meet us for an Online Session to test the Learning Experience at Burntune</span>
                                   
                                </div>
                                {/* <span className="badge bg-primary rounded-pill">14</span> */}
                            </li>

                        </ol>
                        <br />

                        <small className="text-dark">
                            Go to <span className="text-primary" onClick={() => history.goBack()} >Back</span> | <Link className="text-decoration-none" to="/">Home</Link>
                        </small>

                    </div>
                </div>


            </section>
            <Footer />
        </div>
    )
}

export default Enroll
