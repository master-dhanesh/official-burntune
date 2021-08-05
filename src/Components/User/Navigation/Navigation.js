import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { SignOut } from '../../../Store/Actions';
import css from './Navigation.module.css';
import MobileNavigation from './MobileNavigation';
import loginlogo from '../../../assets/loginlogo.png';

import burntune from '../../../assets/burntunelogowhite.png';

function Navigation(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const { isUser, user } = useSelector((state) => state.userReducer);


    const UserLogout = () => {
        dispatch(SignOut(history));
    }

    return <div>
        {(!(window.innerWidth < 768)) ?
            <div className={css.b_nav_container}>
                <Link to="/"><img style={{ height: '3em' }} src={burntune} alt={burntune} /></Link>
                <div className={css.b_navelements} >
                    {
                        isUser ?
                            <>
                                <div className="dropdown ">
                                    <button className="p-0 btn bg-transparent dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                       <img className="rounded-circle" src={user.photoURL} height="40" alt={user.photoURL} />
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><span className="dropdown-item" onClick={UserLogout}>Logout</span></li>
                                    </ul>
                                </div>
                            </> :
                            <>
                                <button
                                    onClick={() => history.push('/login')}
                                    className={css.b_loginbutton}>
                                    <img src={loginlogo} className={css.b_loginimg} alt={loginlogo} />
                                    &nbsp;
                                    Login
                                </button>
                                <button onClick={props.callRef} className={css.b_transbutton}>Join Us</button>
                            </>
                    }



                </div>
            </div> : <MobileNavigation />}
    </div>
}

export default Navigation;


