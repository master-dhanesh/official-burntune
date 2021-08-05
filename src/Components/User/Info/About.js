import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

import css from './About.module.css';
import dummy3 from '../../../assets/dummy2.jpg';


function Login() {
    return (
        <div className={css.b_login_container}>
            <div className={css.b_login_Navigation}>
                <Navigation />
            </div>
            <section className={`${css.b_login_section}`}>

                <div className={css.b_about_header}>
                    <h6 className={css.b_about_subheading}>LEARN</h6>
                    <h1 className={css.b_about_heading}>WHAT IS&nbsp;
                        <span className="fw-normal">BURNTUNE</span> ? </h1>
                </div>
                <div className={css.b_about_content}>

                    <div className={css.b_about_profile}>   
                        <div style={{ backgroundImage: `url(${dummy3})` }}
                            className={css.b_about_image}></div>
                    </div>

                    <h4 className="text-center">Daniel Hogg</h4>
                    <h6 className="text-muted text-center">Founder & Chief Executive Officer of <br /> Burntune Music and Media Pvt. Ltd.</h6>

                    <p className="w-75 m-auto mt-5">
                        <h4> <u>Vision</u> </h4>
                        At Burntune, we believe that you, the human being is the center of  all
                        creativity and the same should be nurtured with Art and Music.
                        <br /><br />
                        Technology and the Internet has made it possible for individuals to learn,
                        grow, and innovate like no other time in history, and hence we wish to
                        teach you Music in ways that truly empower you to live your dreams and
                        make them successfully come true.
                        <br /><br />
                        Burntune is a community of Musicians and Creators.
                        <br /><br />
                        By supporting each other and working ambitiously towards the goal of
                        Music Professionalism, we are creating BIG opportunities for You in the
                        field of Arts and Entertainment unlike any other platform.
                        <br /><br />
                        However, Music is not the only thing you will learn with us. You will learn
                        what School has not been able to teach you....
                        <br /><br />
                        How to create a brand? <br />
                        How to provide value?   <br />
                        How to find and engage your audience?   <br />
                        How to become financially independent by doing what you love the most? <br />
                        <br /><br />

                        We do not believe that Burntune is for everybody.....
                        <br /><br />
                        But the passionate and ambitious few at Burntune can come from
                        anywhere!
                    </p>


                    <br />
                    <p className="w-75 m-auto mt-5">
                        <h4> <u>Founder’s Message</u> </h4>
                        Ever since I was a young boy, I struggled to find a way to put my Songs out
                        into the world, but never had the right guidance or economic support to
                        motivate me to stay true to my goals...
                        <br /> <br />
                        As I worked through many jobs in Banking, Non-Profits, Schools, and the
                        Ed-tech industry, it slowly dawned upon me....
                        <br /><br />
                        Why aren’t we making use of our Gifts....?
                        <br /><br />
                        We can communicate with anyone in the world at the click of a button...
                        <br /><br />
                        We can advertise our work at the cost of cupcakes...
                        <br /><br />
                        We can provide value to so many of those who need it the most...
                        <br /><br />
                        I wish to Encourage the Creatively Twisted Individual and guide them to
                        become who they truly are and do what they feel most excited to do.
                        <br /><br />
                        It will not be easy but it is definitely very possible and worthwhile.
                        <br /><br />
                        <p>
                            Truly yours, <br />
                            <strong>Daniel Hogg</strong>
                        </p>
                    </p>

                </div>
                <br /><br />
            </section>
            <Footer />
        </div>
    )
}

export default Login
