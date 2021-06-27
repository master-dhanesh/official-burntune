import React from 'react';

import guitargirl from '../../../assets/guitargirl.png';
import css from './Trending.module.css';
import LatestEvent from './LatestEvents/LatestEvents';

function Trending() {
    return (
        <div className={css.b_trending_container}>
            <img className={css.b_trending_guitargirl} src={guitargirl} alt={guitargirl} />
            
            <div className={`${css.b_trending_events}`}>

                <LatestEvent />
               
            </div>

        </div>
    )
}

export default Trending;
