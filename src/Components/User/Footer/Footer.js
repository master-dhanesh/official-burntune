import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import emailjs from 'emailjs-com';


import { RegisteringEnquirySubs } from '../../../Store/Actions/enquiryActions';

import css from './Footer.module.css';
import arrowButton from '../../../assets/arrowButton.png';
import yt from '../../../assets/youtubelogo.png';
import tw from '../../../assets/twitterlogo.png';
import ln from '../../../assets/linkedinlogo.png';
import ch from '../../../assets/clubhouselogo.png';
import fb from '../../../assets/facebooklogo.png';
import ins from '../../../assets/instagramlogo.png';
import Spotify from '../../../assets/Spotify-logo.png';

function Footer(props) {
    const history = useHistory();
    const dispatch = useDispatch()

    const subject = "subscribe";

    const SendEmail = (e) => {
        e.preventDefault();
        console.log(e.target);
        emailjs.sendForm('service_q3rusqi', 'template_x4wl77h', e.target, 'user_BEqlI6qI93gbir74xXnOh')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });

            const enquiry = { email: e.target.email.value, type: "subscribe" };
            dispatch(RegisteringEnquirySubs(enquiry,history));

        
    }

    return (
        <div id="scroll_footer" className={css.b_footer_container}>
            
            <section className={`${css.b_footer_section1}`}>
                <div className={`${css.b_footer_section1_A} p-5`}>
                    <div></div>
                    <div>
                        <h6 className={css.b_footer_subheading}>LET'S COLLABORATE</h6>
                        <h1 className={css.b_footer_heading}>PARTNER WITH US</h1>
                    </div>
                    <div>
                    <Link to="/business/work-together" className={css.b_footer_button}><img src={arrowButton} alt={arrowButton} /></Link>
                    </div>
                </div>
                <div className={`${css.b_footer_section1_B} p-5`}>
                    <div></div>
                    <div>
                        <h6 className={css.b_footer_subheading}>BURNTUNE CAREERS</h6>
                        <h1 className={css.b_footer_heading}>JOIN THE TEAM</h1>
                    </div>
                    <div>
                        <Link to="/business/join-team" className={css.b_footer_button}><img src={arrowButton} alt={arrowButton} /></Link>
                    </div>
                </div>
            </section>
            
            <section className={`${css.b_footer_section2}`}>
                <div className={`${css.b_footer_section2_A} p-5`}>
                    <div>
                        <h6 className={css.b_footer_subheading}>STAY TUNED</h6>
                        <form onSubmit={SendEmail} className={css.b_footer_input_container}>
                            <input className={css.b_footer_input} name="email" type="email" placeholder="YOUR EMAIL"  />
                            <input readOnly hidden name="message" value="Thankyou so much for the subscription, We'll keep you updated." type="text" />
                            <input readOnly hidden name="name" value="buddy" type="text" />
                            <input readOnly hidden name="subject" value={`Enquiry regarding ${subject} classes`} type="text" />
                            <button className={css.b_footer_button}><img src={arrowButton} alt={arrowButton} /></button>
                        </form>
                    </div>
                    
                    <p className={css.b_footer_copyright}>
                        © 2021 Burntune Music and Media Pvt Ltd. All Rights reserved &nbsp;
                        <Link className="text-light text-decoration-none" to="/tnc">Terms & Conditions</Link>
                        </p>
                </div>
                <div className={`${css.b_footer_section2_B} p-5`}>
                    <h6 className={css.b_footer_subheading}>FOLLOW US</h6>
                    <h1 className={css.b_footer_links}>
                        <a rel="noreferrer" target="_blank" title="Facebook" href='https://www.facebook.com/burntunemusic'><img  className={css.b_footer_link_logo} src={fb}  alt={fb} /></a>
                        <a rel="noreferrer" target="_blank" title="Instagram" href='https://www.instagram.com/burntune/'><img  className={css.b_footer_link_logo} src={ins} alt={ins} /></a>
                        <a rel="noreferrer" target="_blank" title="LinkedIn" href='https://www.linkedin.com/company/burntune'><img  className={css.b_footer_link_logo} src={ln}  alt={ln} /></a>
                        <a rel="noreferrer" target="_blank" title="Youtube" href='https://www.youtube.com/channel/UCxPzr_ZIe9_7LNEw3ZWChbw?reload=9'><img  className={css.b_footer_link_logo} src={yt}  alt={yt} /></a>
                        <a rel="noreferrer" target="_blank" title="Twitter" href='https://twitter.com/burntunemusic'><img  className={css.b_footer_link_logo} src={tw}  alt={tw} /></a>
                        <a rel="noreferrer" target="_blank" title="Spotify" href='https://open.spotify.com/show/0vo6IyS9S56Evi5WEUIM8K'><img  className={css.b_footer_link_logo} src={Spotify}  alt={Spotify} /></a>
                        <a rel="noreferrer" target="_blank" title="Clubhouse" href='https://clubhouse.com/club/burntune-music-spectrum'><img  className={css.b_footer_link_logo} style={{height:'24px'}} src={ch}  alt={ch} /></a>
                    </h1>
                    <p className={css.b_footer_dev}>
                    BY <a rel="noreferrer" target="_blank" href="https://www.instagram.com/master.dhanesh/">@master.dhanesh</a> | @sheryians_coding_school
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Footer;
