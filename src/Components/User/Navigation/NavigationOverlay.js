import React from 'react';
import { Link } from 'react-router-dom';

import css from './NavigationOverlay.module.css'

import hbs from '../../../assets/hbs.png';
import leanpub from '../../../assets/leanpub.png';
import usersolid from '../../../assets/usersolid.png';
import loginlogo from '../../../assets/login-pink.png';
import dummy1 from '../../../assets/dummy1.jpg';
import burntune from '../../../assets/burntunelogowhite.png';

function NavigationOverlay(props) {    
    return (
        <div className={css.b_navover_container} >
            <section className={css.b_navover_section1}>
                <div><img onClick={props.NavHideHandler} src={hbs} alt={hbs} /></div>
                <div> <Link to="/">
                    <img style={{height: '4em'}} src={burntune} alt={burntune}/>
                </Link></div>
                <div> <Link to="/about"><img src={leanpub} alt={leanpub} /> </Link></div>
                <div><img src={usersolid} alt={usersolid} /></div>
            </section>
            
            <section className={css.b_navover_section2}>
            <div className="d-flex justify-content-end">
            <Link to="/login" className={css.b_loginbutton}>
                <img src={loginlogo} className={css.b_loginimg} alt={loginlogo} />
                &nbsp;
                Login
            </Link>
            </div>
            <br />
            <div>
                <div className={css.b_nav_card}>
                    <img src={dummy1} alt={dummy1} />
                    <div>
                        <h1>Name</h1>
                        <p> <span>@handle</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, ducimus.</p>
                    </div>
                </div>
                <br /> 
                <div className={css.b_nav_card}>
                    <img src={dummy1} alt={dummy1} />
                    <div>
                        <h1>Name</h1>
                        <p> <span>@handle</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, ducimus.</p>
                    </div>
                </div>
            </div>

            </section>
        </div>
    )
}

export default NavigationOverlay
