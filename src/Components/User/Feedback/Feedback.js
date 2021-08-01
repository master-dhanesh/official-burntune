import React from 'react';
import { Link } from 'react-router-dom';

import css from './Feedback.module.css';

function Feedback() {
    return (
        <div className={`${css.b_feedback_container} text-center d-flex flex-column justify-content-end`} >
        <h1 className="text-dark">Thankyou 🙏</h1>    
        <h3 className="text-dark">We will contact you soon</h3>    
        <Link className="text-decoration-none" to="/">go to home</Link>
        <div className="mt-3"></div>
        <div className="mt-5"></div>
        </div>
    )
}

export default Feedback
