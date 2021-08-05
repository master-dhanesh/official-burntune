import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import Alumni from '../Alumni/Alumni';
import Footer from '../Footer/Footer';
import Homepage from '../Homepage/Homepage';
import Trending from '../Trending/Trending';

const scrollToRef = (ref) => {
    return window.scrollTo(0, ref.current.offsetTop) 
}

function Landing() {
    const myRef = useRef(null);
    const executeScroll = () => scrollToRef(myRef)


    const { isUser } = useSelector((state) => state.userReducer);

    return isUser ? <Redirect to="/auth/profile" /> : (
        <>
            <Homepage callRef={executeScroll} refHook={myRef} />
            <Trending callRef={executeScroll} refHook={myRef} />
            <Alumni callRef={executeScroll} refHook={myRef} />
            <Footer callRef={executeScroll} refHook={myRef} />
        </>
    )
}

export default Landing;
