import React, { useState } from 'react';

import css from './Alumni.module.css';
import guitarholdinggirl2 from '../../../assets/guitarholdinggirl2.png';
import Drishika from '../../../assets/testimonials/Drishika.jpeg';
import Gulshan from '../../../assets/testimonials/Gulshan.jpeg';
import Kaustubh from '../../../assets/testimonials/Kaustubh.jpeg';
import Muskan from '../../../assets/testimonials/Muskan.jpeg';
import vivaan from '../../../assets/testimonials/vivaan.jpeg';

function Alumni() {
    const [testimonials] = useState([
        {
            name: "Vivaan",
            desc: "I got exposure to how people in corporate world will be like and how i should tackle the barriers ive learnt to have professional communication with organisation I don't feel like there's any hierarchy .. even the boss feels.like a brother to me and everyone gets equal piece of cake",
            image: vivaan
        },
        
        {
            name: "Muskan Pushpad",
            desc: "First of all , burntune is not workplace for me anymore. Being at burntune feels like my second home it is the best thing which happened to me .I think i could have never learned the things from anywhere which I'm learning today being a part of burntune because it is the place where i feel freedom of expression, speech and i get lot of love and affection .The bestest thing about burntune is 'I GOT TO KNOW ABOUT MY POTENTIAL and IT HELPED ME TO EXPLORE NEW THINGS AROUND which is the best thing anyone could ever get , i feel this is the reason I would always love to be a part of burntune'",
            image: Muskan
        },
        {
            name: "Gulshan Azwa",
            desc: "I started analysing and keenly listening to songs rather than just listening which actually brought in me a perspective to do things with full concentration and analyse its outcomes and learn from even the smallest of things. This change in me which I got from burntune made me feel music in my ears, mind and soul and after I joined burntune I even started to see the beauty of basic chord progressions and now, whenever I play the guitar, it's not the homework I am doing, but cultivating a new passion",
            image: Gulshan
        },
        {
            name: "Kaustubh Mongia",
            desc: "So best thing about burntune is that here we don't have to just practice the exercise for 1 month from first day we were playing songs which developed my interest towards my instrument more. Peeps at burntune are so supportive and burntune is more like family than an institute. I never felt that my instructor pratyush is an instructor he has more been a friend to me which makes learning better.",
            image: Kaustubh
        },
        {
            name: "Drishika Saraogi ",
            desc: "Burntune isnt just a music organisation to me, its more like a big family where everyone supports everyone. I didnt have a musical background but the people here never made me feel that They have something that I don’t. Even though burntune is a music based organisation and i have no musical background they never made me feel that I don’t belong there is always something about this organisation that keeps me going and attracting me towards it. Yes, burntune has changed me a lot it has made me fall in love with music and i am now learning guitar in burntune and trust me burntune is worth it. Also they give out so many  opportunities to teenagers which probably most organisations won’t but then burntune makes one realises one’s true worth and potential and brings out the best version of themselves.",
            image: Drishika
        },

    ])

    const overlays = [
        'rgba(217, 63, 135, .7)',
        'rgba(31, 19, 44, 0.7)',
        'rgba(42, 27, 60, 0.7)',
        'rgba(68, 49, 141, 0.7)',
        'rgba(130, 101, 167, 0.7)',
        'rgba(164, 179, 182, 0.7)'];

    const listTestimonials = testimonials.map((t, i) => {
        return (
            <div key={i} style={{backgroundImage: `url(${t.image})`}} className={`${css.b_alumni_card}`}>
                <div style={{ backgroundColor: overlays[Math.floor(Math.random() * overlays.length)] }} className={`${css.b_alumni_card_overlay} d-flex flex-column justify-content-center align-items-center p-5`}>
                    <h2 className={css.b_alumni_card_heading}>{t.name}</h2>
                    <p className={`${css.b_alumni_card_para} text-center`}>{t.desc}</p>
                </div>
            </div>
        )
    })

    return (
        <div className={css.b_alumni_container}>
            <img className={css.b_alumni_sideimg} src={guitarholdinggirl2} alt={guitarholdinggirl2} />
            <br /><br />
            <h1 className={css.b_alumni_heading}>
                Life <span className="fw-normal">@burntune</span></h1>
            <br /> <br />
            <div className={`${css.b_alumini_cards} d-flex flex-wrap`}>

            {listTestimonials}

                {/* <div className={`${css.b_alumni_card}`}>
                    <div style={{ backgroundColor: overlays[Math.floor(Math.random() * overlays.length)] }} className={`${css.b_alumni_card_overlay} d-flex flex-column justify-content-center align-items-center p-5`}>
                        <h2 className={css.b_alumni_card_heading}>Lorem, ipsum.</h2>
                        <p className={`${css.b_alumni_card_para} text-center`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit at debitis asperiores aspernatur odio? Esse hic repellat natus consequatur. Asperiores optio similique vitae ducimus animi ratione, inventore dolorum aliquid!</p>
                    </div>
                </div>

                <div className={`${css.b_alumni_card}`}>
                    <div style={{ backgroundColor: overlays[Math.floor(Math.random() * overlays.length)] }} className={`${css.b_alumni_card_overlay} d-flex flex-column justify-content-center align-items-center p-5`}>
                        <h2 className={css.b_alumni_card_heading}>Lorem, ipsum.</h2>
                        <p className={`${css.b_alumni_card_para} text-center`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit at debitis asperiores aspernatur odio? Esse hic repellat natus consequatur. Asperiores optio similique vitae ducimus animi ratione, inventore dolorum aliquid!</p>
                    </div>
                </div>

                <div className={`${css.b_alumni_card}`}>
                    <div style={{ backgroundColor: overlays[Math.floor(Math.random() * overlays.length)] }} className={`${css.b_alumni_card_overlay} d-flex flex-column justify-content-center align-items-center p-5`}>
                        <h2 className={css.b_alumni_card_heading}>Lorem, ipsum.</h2>
                        <p className={`${css.b_alumni_card_para} text-center`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit at debitis asperiores aspernatur odio? Esse hic repellat natus consequatur. Asperiores optio similique vitae ducimus animi ratione, inventore dolorum aliquid!</p>
                    </div>
                </div>

                <div className={`${css.b_alumni_card}`}>
                    <div style={{ backgroundColor: overlays[Math.floor(Math.random() * overlays.length)] }} className={`${css.b_alumni_card_overlay} d-flex flex-column justify-content-center align-items-center p-5`}>
                        <h2 className={css.b_alumni_card_heading}>Lorem, ipsum.</h2>
                        <p className={`${css.b_alumni_card_para} text-center`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit at debitis asperiores aspernatur odio? Esse hic repellat natus consequatur. Asperiores optio similique vitae ducimus animi ratione, inventore dolorum aliquid!</p>
                    </div>
                </div>

                <div className={`${css.b_alumni_card}`}>
                    <div style={{ backgroundColor: overlays[Math.floor(Math.random() * overlays.length)] }} className={`${css.b_alumni_card_overlay} d-flex flex-column justify-content-center align-items-center p-5`}>
                        <h2 className={css.b_alumni_card_heading}>Lorem, ipsum.</h2>
                        <p className={`${css.b_alumni_card_para} text-center`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit at debitis asperiores aspernatur odio? Esse hic repellat natus consequatur. Asperiores optio similique vitae ducimus animi ratione, inventore dolorum aliquid!</p>
                    </div>
                </div>

                <div className={`${css.b_alumni_card}`}>
                    <div style={{ backgroundColor: overlays[Math.floor(Math.random() * overlays.length)] }} className={`${css.b_alumni_card_overlay} d-flex flex-column justify-content-center align-items-center p-5`}>
                        <h2 className={css.b_alumni_card_heading}>Lorem, ipsum.</h2>
                        <p className={`${css.b_alumni_card_para} text-center`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit at debitis asperiores aspernatur odio? Esse hic repellat natus consequatur. Asperiores optio similique vitae ducimus animi ratione, inventore dolorum aliquid!</p>
                    </div>
                </div> */}

            </div>
            <br /><br />
        </div>
    )
}

export default Alumni;
