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
                    <div style={{backgroundImage: `url(${dummy3})`}} 
                    className={css.b_about_image}></div>
                </div>

                <h4 className="text-center">Title of person</h4>
                <h6 className="text-muted text-center">Subtitle of the person</h6>
                <p className="w-75 m-auto mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium saepe repudiandae modi voluptatum quis. Sint provident fuga tempore vel eveniet illum esse nobis saepe maiores eum qui similique alias consequatur excepturi atque ipsa harum vitae, quasi aperiam. Voluptatum, cum ipsa repellendus quasi voluptatibus ab amet perspiciatis nobis quaerat illo reiciendis, earum tempora fugiat voluptas. Rerum odio architecto rem sed quos repudiandae, provident voluptatibus cupiditate quis ab unde ipsa et veritatis, temporibus neque, esse quam nihil dignissimos assumenda placeat ipsam. Nemo recusandae neque porro non mollitia, libero minima quam repudiandae iure vero eveniet aspernatur excepturi vitae asperiores quas sequi, odio at suscipit culpa, dolore ullam? A harum explicabo in ratione rem quisquam repellat qui fugit dolorem ducimus beatae vel, iste assumenda quam exercitationem ea sapiente porro itaque voluptate doloribus culpa, quos laboriosam autem ipsa. Quis aut doloremque deserunt, quo saepe harum! Iste molestiae, beatae accusamus similique rerum, sint asperiores corporis, illum reiciendis soluta molestias! Impedit magni labore, qui rerum molestias laborum temporibus alias minima. Quod iste nisi delectus rem non autem eveniet eligendi ad asperiores id commodi odio neque eum eius cupiditate ex reprehenderit possimus, eos atque ducimus tempore quia dignissimos dolor sequi? Quod excepturi obcaecati, odio ab soluta officia tempore?</p>
            </div>
            <br /><br />
        </section>
        <Footer />
        </div>
    )
}

export default Login
