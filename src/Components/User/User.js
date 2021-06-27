import React from 'react';

import css from './User.module.css';
import Homepage from './Homepage/Homepage';
import Trending from './Trending/Trending';
import Alumni from './Alumni/Alumni';
import Footer from './Footer/Footer';

function User() {
    return (
        <div className={css.b_user_container}>
            <Homepage />
            <Trending />
            <Alumni />
            <Footer />
        </div>
    )
}

export default User
