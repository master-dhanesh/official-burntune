import React from 'react';

import css from './Footer.module.css';
import arrowButton from '../../../assets/arrowButton.png';
import yt from '../../../assets/youtubelogo.png';
import tw from '../../../assets/twitterlogo.png';
import ln from '../../../assets/linkedinlogo.png';
import ch from '../../../assets/clubhouselogo.png';
import fb from '../../../assets/facebooklogo.png';
import ins from '../../../assets/instagramlogo.png';

function Footer() {
    return (
        <div className={css.b_footer_container}>
            
            <section className={`${css.b_footer_section1}`}>
                <div className={`${css.b_footer_section1_A} p-5`}>
                    <div></div>
                    <div>
                        <h6 className={css.b_footer_subheading}>WANT TO WORK TOGETHER</h6>
                        <h1 className={css.b_footer_heading}>PARTNER WITH US</h1>
                    </div>
                    <div>
                    <a href='#' className={css.b_footer_button}><img src={arrowButton} alt={arrowButton} /></a>
                    </div>
                </div>
                <div className={`${css.b_footer_section1_B} p-5`}>
                    <div></div>
                    <div>
                        <h6 className={css.b_footer_subheading}>JOIN THE TEAM</h6>
                        <h1 className={css.b_footer_heading}>WORK WITH US</h1>
                    </div>
                    <div>
                        <a href='#' className={css.b_footer_button}><img src={arrowButton} alt={arrowButton} /></a>
                    </div>
                </div>
            </section>
            
            <section className={`${css.b_footer_section2}`}>
                <div className={`${css.b_footer_section2_A} p-5`}>
                    <div>
                        <h6 className={css.b_footer_subheading}>STAY TUNED</h6>
                        <div className={css.b_footer_input_container}>
                            <input className={css.b_footer_input} type="email" placeholder="YOUR EMAIL"  />
                            <a href='#' className={css.b_footer_button}><img src={arrowButton} alt={arrowButton} /></a>
                        </div>
                    </div>
                    
                    <p className={css.b_footer_copyright}>© 2021 BURNTUNE. All Rights reserved</p>
                </div>
                <div className={`${css.b_footer_section2_B} p-5`}>
                    <h6 className={css.b_footer_subheading}>STAY TUNED</h6>
                    <h1 className={css.b_footer_links}>
                        <a title="Facebook" href='#'><img  className={css.b_footer_link_logo} src={fb}  alt={fb} /></a>
                        <a title="Instagram" href='#'><img  className={css.b_footer_link_logo} src={ins} alt={ins} /></a>
                        <a title="LinkedIn" href='#'><img  className={css.b_footer_link_logo} src={ln}  alt={ln} /></a>
                        <a title="Youtube" href='#'><img  className={css.b_footer_link_logo} src={yt}  alt={yt} /></a>
                        <a title="Twitter" href='#'><img  className={css.b_footer_link_logo} src={tw}  alt={tw} /></a>
                        <a title="Clubhouse" href='#'><img  className={css.b_footer_link_logo} style={{height:'24px'}} src={ch}  alt={ch} /></a>
                    </h1>
                    <p className={css.b_footer_dev}>
                    BY<a href="#">@master.dhanesh</a> | <a href="#">@sheryians_coding_school</a>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Footer;
