import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect, } from 'react-router-dom';

import { RestoreSession } from '../../Store/Actions';
import css from './User.module.css';

import Admin from '../Admin/Admin';

import About from './Info/About';
import Login from './Sign/Login';
import Register from './Sign/Register';
import Enroll from './Sign/Enroll/Enroll';
import Reach from './Sign/Reach/Reach';
import Profile from './Auth/Profile';
import Landing from './Landing/Landing';
import Feedback from './Feedback/Feedback';
import TnC from './TnC/TnC';



function User() {
    const {isUser, error} = useSelector(state => state.userReducer);
    // console.log(isUser)

    const AdminPath = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        return mm+dd+yyyy;
      }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(RestoreSession());
    }, [dispatch])

    return (
        <div className={css.b_user_container}>

            <Route exact path={`/admin/${AdminPath()}`} component={Admin} />

            <Switch>
                { error ? <Route render ={ () => <h1>Something Went Wrong</h1>} />: ''}
                { isUser ? <Redirect from="/login" to="/auth/profile" />: ''}
                { isUser ? <Redirect from="/register" to="/auth/profile" />: ''}
                <Route exact path="/auth/profile" component={Profile} /> 
                <Route exact path="/about" component={About} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register/:instrument" component={Register} />
                <Route exact path="/card/:instrument/:subject" component={Reach} />
                <Route exact path="/card/:instrument" component={Enroll} />
                <Route exact path="/business/:subject" component={Reach} />
                <Route exact path="/feedback" component={Feedback} />
                <Route exact path="/tnc" component={TnC} />
                <Route exact path="/" component={Landing} />
            </Switch>
        </div>
    )
}

export default User
