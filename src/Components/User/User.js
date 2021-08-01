import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, } from 'react-router-dom';

import { RestoreSession } from '../../Store/Actions';
import css from './User.module.css';

import About from './Info/About';
import Login from './Sign/Login';
import Enroll from './Sign/Enroll/Enroll';
import Reach from './Sign/Reach/Reach';
import Profile from './Auth/Profile';
import Landing from './Landing/Landing';
import Feedback from './Feedback/Feedback';

function User() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(RestoreSession());
    }, [dispatch])

    return (
        <div className={css.b_user_container}>
            <Switch>
                <Route exact path="/auth/profile" component={Profile} />
                <Route exact path="/about" component={About} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/card/:instrument/:subject" component={Reach} />
                <Route exact path="/card/:instrument" component={Enroll} />
                <Route exact path="/business/:subject" component={Reach} />
                <Route exact path="/feedback" component={Feedback} />
                <Route exact path="/" component={Landing} />
            </Switch>
        </div>
    )
}

export default User
