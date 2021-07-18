import React from 'react';
import { useHistory, Link } from 'react-router-dom';


import css from './Navigation.module.css';
import MobileNavigation from './MobileNavigation';
import loginlogo from '../../../assets/loginlogo.png';
           
import burntune from '../../../assets/burntunelogowhite.png';

function Navigation() {
    const history = useHistory();

    const ScrollDownHandler = () => {
        let wHeight = window.innerHeight;
        window.scrollY = 1000;
        console.log();
    }

    return <div>
    {(!(window.innerWidth < 768) ) ?  
        <div className={css.b_nav_container}>
            <Link to="/"><img style={{height: '3em'}} src={burntune} alt={burntune}/></Link>
            <div className={css.b_navelements} >
                <button
                    onClick={() => history.push('/users/login')} 
                    className={css.b_loginbutton}>
                    <img src={loginlogo} className={css.b_loginimg} alt={loginlogo} />
                    &nbsp;
                    Login
                </button>
                <button onClick={ScrollDownHandler} className={css.b_transbutton}>Join Us</button>
            </div>  
        </div> : <MobileNavigation />}
        </div>
}

export default Navigation;


