import React from 'react';
import { Link } from 'react-router-dom';

import instalogo from '../../../assets/instalogo.png';
import spotify from '../../../assets/spotify.png';
import inlogo from '../../../assets/inlogo.png';
import downarrowlogo from '../../../assets/DownArrowlogo.png';

import Navigation from '../Navigation/Navigation';
import css from './Homepage.module.css';
import Courses from '../Courses/Courses';

function Homepage(props) {
    return (
        <div className={css.b_homepage_container}>

            <section className={css.b_homepage_view}>
                <Navigation {...props} />

                <div className={css.b_heading_container} >
                    <div className="text-center">
                        <h6 className={css.b_homepage_subheading}>Ukulele | Guitar | Piano | Voice | Rhythm | Production</h6>
                        <h1 className={css.b_homepage_heading}>Unlock your talent&nbsp;
                            <span className="fw-normal">
                                with BURNTUNE
                            </span> </h1>
                        <br />
                        {/* <button
                            onClick={() => history.push('/login')}
                            className={css.b_bgbutton}>Start Learning</button> */}
                        <div className="btn-group">
                            <button type="button" className={`dropdown-toggle ${css.b_bgbutton}`} data-bs-toggle="dropdown" aria-expanded="false">
                                Start Learning
                            </button>
                            <ul className={`dropdown-menu p-0 ${css.dropdown_item_li}`}>
                                <li><Link className={`p-3 text-white dropdown-item ${css.dropdown_item_hover}`} to="/register">Let's Start</Link></li>
                                <li><hr className="m-0 bg-light dropdown-divider" /></li>
                                <li><Link className={`p-3 text-white dropdown-item ${css.dropdown_item_hover}`} to="/about">More</Link></li>
                            </ul>
                        </div>
                        {/* {(window.innerWidth < 768) ? "" :
                            <button
                                onClick={() => history.push('/about')}
                                className={css.b_transbutton}>&nbsp;More&nbsp; </button>} */}

                    </div>
                </div>

                <div className={css.b_links_scroll}>
                    <div className={` ${css.b_links_scroll_hidden} d-flex flex-column`}>
                        <a rel="noreferrer" target="_blank" className="mb-2" href="https://open.spotify.com/show/0vo6IyS9S56Evi5WEUIM8K"><img src={spotify} alt={spotify} /></a>
                        <a rel="noreferrer" target="_blank" className="mb-2" href="https://www.instagram.com/burntune/"><img src={instalogo} alt={instalogo} /></a>
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/burntune"><img src={inlogo} alt={inlogo} /></a>
                    </div>

                    <div className="d-flex flex-column justify-content-end align-items-center">
                        <h4 className={css.b_homepage_scrolltext}>SCROLL TO DISCOVER MORE</h4>
                        <img className={css.b_scroll_icon} src={downarrowlogo} alt={downarrowlogo} />
                    </div>

                    <div></div>

                </div>

            </section>

            <Courses />

        </div>
    )
}

export default Homepage;
