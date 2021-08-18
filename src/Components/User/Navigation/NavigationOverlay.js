import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SignOut } from '../../../Store/Actions';

import css from './NavigationOverlay.module.css'

import hbs from '../../../assets/hbs.png';
import leanpub from '../../../assets/leanpub.png';
import usersolid from '../../../assets/usersolid.png';
import loginlogo from '../../../assets/login-pink.png';
import FoundersPic from '../../../assets/FoundersPic1.jpg';
import burntune from '../../../assets/burntunelogowhite.png';

function NavigationOverlay(props) {

    const history = useHistory();
    const dispatch = useDispatch();
    const { isUser } = useSelector((state) => state.userReducer);

    const UserLogout = () => {
        dispatch(SignOut(history));
    }

    return (
        <div className={css.b_navover_container} >
            <section className={css.b_navover_section1}>
                <div><img onClick={props.NavHideHandler} src={hbs} alt={hbs} /></div>
                <div> <Link to="/">
                    <img style={{ height: '4em' }} src={burntune} alt={burntune} />
                </Link></div>
                <div> <Link to="/about"><img src={leanpub} alt={leanpub} /> </Link></div>
                <a href="#emailInp" onClick={props.NavHideHandler} ><img src={usersolid} alt={usersolid} /></a>
            </section>

            <section className={css.b_navover_section2}>
                <div className="d-flex justify-content-end">

                {
                        !isUser ? 
                        <Link to="/login" className={css.b_loginbutton}>
                        <img src={loginlogo} className={css.b_loginimg} alt={loginlogo} />
                        &nbsp;
                        Login
                    </Link> : 
                    <span onClick={UserLogout} className={css.b_loginbutton}>
                        <img src={loginlogo} className={css.b_loginimg} alt={loginlogo} />
                        &nbsp;
                        Logout
                    </span>
                        
                }

                    


                </div>
                <br />
                <div>
                    <div className={css.b_nav_card}>
                        <img src={FoundersPic} alt={FoundersPic} />
                        <div>
                            <h1>Daniel Hogg</h1>
                            <p> <span>Founder & Chief Executive Officer of Burntune Music and Media Pvt. Ltd.</span>  <br />
                                Ever since I was a young boy, I struggled to find a way to put my Songs out into the world, 
                                I wish to Encourage the Creatively Twisted Individual and guide them to become who they truly 
                                are and do what they feel most excited to do.
                                It will not be easy but it is definitely very possible and worthwhile.
                                </p>
                        </div>
                    </div>
                    <br />
                    {/* <div className={css.b_nav_card}>
                        <img src={dummy1} alt={dummy1} />
                        <div>
                            <h1>Name</h1>
                            <p> <span>@handle</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, ducimus.</p>
                        </div>
                    </div> */}
                </div>

            </section>
        </div>
    )
}

export default NavigationOverlay
