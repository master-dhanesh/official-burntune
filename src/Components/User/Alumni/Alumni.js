import React from 'react';

import css from './Alumni.module.css';
import guitarholdinggirl2 from '../../../assets/guitarholdinggirl2.png'

function Alumni() {

    const overlays = [  
            'rgba(217, 63, 135, .7)', 
            'rgba(31, 19, 44, 0.7)', 
            'rgba(42, 27, 60, 0.7)', 
            'rgba(68, 49, 141, 0.7)', 
            'rgba(130, 101, 167, 0.7)', 
            'rgba(164, 179, 182, 0.7)']

    return (
        <div className={css.b_alumni_container}>
            <img className={css.b_alumni_sideimg} src={guitarholdinggirl2} alt={guitarholdinggirl2} />
            <br /><br />
             <h1 className={css.b_alumni_heading}>
             Life <span className="fw-normal">@burntune</span></h1> 
             <br /> <br />  
            <div className={`${css.b_alumini_cards} d-flex flex-wrap`}>
                
                <div className={`${css.b_alumni_card}`}>
                    <div style={{backgroundColor: overlays[Math.floor(Math.random() * overlays.length )]}} className={`${css.b_alumni_card_overlay} d-flex flex-column justify-content-center align-items-center p-5`}>
                        <h2 className={css.b_alumni_card_heading}>Lorem, ipsum.</h2>
                        <p className={`${css.b_alumni_card_para} text-center`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit at debitis asperiores aspernatur odio? Esse hic repellat natus consequatur. Asperiores optio similique vitae ducimus animi ratione, inventore dolorum aliquid!</p>
                    </div>
                </div> 

                <div className={`${css.b_alumni_card}`}>
                    <div style={{backgroundColor: overlays[Math.floor(Math.random() * overlays.length )]}} className={`${css.b_alumni_card_overlay} d-flex flex-column justify-content-center align-items-center p-5`}>
                        <h2 className={css.b_alumni_card_heading}>Lorem, ipsum.</h2>
                        <p className={`${css.b_alumni_card_para} text-center`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit at debitis asperiores aspernatur odio? Esse hic repellat natus consequatur. Asperiores optio similique vitae ducimus animi ratione, inventore dolorum aliquid!</p>
                    </div>
                </div>

                <div className={`${css.b_alumni_card}`}>
                    <div style={{backgroundColor: overlays[Math.floor(Math.random() * overlays.length )]}} className={`${css.b_alumni_card_overlay} d-flex flex-column justify-content-center align-items-center p-5`}>
                        <h2 className={css.b_alumni_card_heading}>Lorem, ipsum.</h2>
                        <p className={`${css.b_alumni_card_para} text-center`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit at debitis asperiores aspernatur odio? Esse hic repellat natus consequatur. Asperiores optio similique vitae ducimus animi ratione, inventore dolorum aliquid!</p>
                    </div>
                </div>

                <div className={`${css.b_alumni_card}`}>
                    <div style={{backgroundColor: overlays[Math.floor(Math.random() * overlays.length )]}} className={`${css.b_alumni_card_overlay} d-flex flex-column justify-content-center align-items-center p-5`}>
                        <h2 className={css.b_alumni_card_heading}>Lorem, ipsum.</h2>
                        <p className={`${css.b_alumni_card_para} text-center`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit at debitis asperiores aspernatur odio? Esse hic repellat natus consequatur. Asperiores optio similique vitae ducimus animi ratione, inventore dolorum aliquid!</p>
                    </div>
                </div>

                <div className={`${css.b_alumni_card}`}>
                    <div style={{backgroundColor: overlays[Math.floor(Math.random() * overlays.length )]}} className={`${css.b_alumni_card_overlay} d-flex flex-column justify-content-center align-items-center p-5`}>
                        <h2 className={css.b_alumni_card_heading}>Lorem, ipsum.</h2>
                        <p className={`${css.b_alumni_card_para} text-center`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit at debitis asperiores aspernatur odio? Esse hic repellat natus consequatur. Asperiores optio similique vitae ducimus animi ratione, inventore dolorum aliquid!</p>
                    </div>
                </div>

                <div className={`${css.b_alumni_card}`}>
                    <div style={{backgroundColor: overlays[Math.floor(Math.random() * overlays.length )]}} className={`${css.b_alumni_card_overlay} d-flex flex-column justify-content-center align-items-center p-5`}>
                        <h2 className={css.b_alumni_card_heading}>Lorem, ipsum.</h2>
                        <p className={`${css.b_alumni_card_para} text-center`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit at debitis asperiores aspernatur odio? Esse hic repellat natus consequatur. Asperiores optio similique vitae ducimus animi ratione, inventore dolorum aliquid!</p>
                    </div>
                </div>

            </div>
            <br /><br />
        </div>
    )
}

export default Alumni;
