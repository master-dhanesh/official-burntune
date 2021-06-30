import React, { useState } from 'react';

import hamburger from '../../../assets/hamburger.png';
import NavigationOverlay from './NavigationOverlay';
import css from './MobileNavigation.module.css';



function MobileNavigation() {
    const [state, setstate] = useState({display: 'none'})
    const NavShowHandler = () => {
        setstate({display: 'block'})
    }

    const NavHideHandler = () => {
        setstate({display: 'none'})
    }

    return (
        <div className={`m-3 ${css.b_navoverlay_container}`}>
            <img onClick={NavShowHandler} src={hamburger} alt={hamburger} />
            <div style={state} className={css.b_navoverlay_display}>
                <NavigationOverlay NavHideHandler={NavHideHandler} />
            </div>
        </div>
    )
}

export default MobileNavigation
