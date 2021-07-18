import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import css from './User.module.css';
import Homepage from './Homepage/Homepage';
import Trending from './Trending/Trending';
import Alumni from './Alumni/Alumni';
import Footer from './Footer/Footer';

import About from './Info/About';
import Login from './Sign/Login';
import Register from './Sign/Register';
import Enroll from './Sign/Enroll/Enroll';
import Reach from './Sign/Reach/Reach';
import Profile from './Auth/Profile';

function User() {
    return (
        <div className={css.b_user_container}>
        {/* <Profile /> */}
        <Switch>
            <Route exact path="/users" render={() => (
                    <>
                        <Homepage />
                        <Trending />
                        <Alumni />
                        <Footer /> 
                    </>
            )} />
            <Route path="/users/about" component={About} />
            <Route path="/users/login" component={Login} />
            <Route path="/users/register" component={Register} />
            <Route path="/users/card/:instrument/:subject" component={Reach} />
            <Route path="/users/card/:instrument" component={Enroll} />
            <Route path="/users/:subject" component={Reach} />
            <Redirect from="/" to="/users" />
        </Switch>
        </div>
    )
}

export default User
