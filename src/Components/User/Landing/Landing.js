import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import Alumni from '../Alumni/Alumni';
import Footer from '../Footer/Footer';
import Homepage from '../Homepage/Homepage';
import Trending from '../Trending/Trending';


function Landing() {


    const { isUser } = useSelector((state) => state.userReducer);

    return isUser ? <Redirect to="/auth/profile" /> : (
        <>
            <Homepage />
            <Trending />
            <Alumni />
            <Footer />
        </>
    )
}

export default Landing;
