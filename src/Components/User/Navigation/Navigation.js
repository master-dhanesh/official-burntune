import React from 'react';

import css from './Navigation.module.css';
import MobileNavigation from './MobileNavigation';
import loginlogo from '../../../assets/loginlogo.png';
           
import burntune from '../../../assets/burntunelogowhite.png';

function Navigation() {
    return <div>
    {(!(window.innerWidth < 768) ) ?  
        <div className={css.b_nav_container}>
            <div><img style={{height: '3em'}} src={burntune} alt={burntune}/></div>
            <div className={css.b_navelements} >
                <button className={css.b_loginbutton}>
                <img src={loginlogo} className={css.b_loginimg} alt={loginlogo} />
                &nbsp;
                Login
                </button>
                <button className={css.b_transbutton}>Join Us</button>
            </div>  
        </div> : <MobileNavigation />}
        </div>
}

export default Navigation;


