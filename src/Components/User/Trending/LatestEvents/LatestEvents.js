import React, { useState } from 'react';

import poster1 from '../../.././../assets/posters/poster1.jpg';
import poster2 from '../../.././../assets/posters/poster2.jpg';
import poster3 from '../../.././../assets/posters/poster3.jpg';

import css from './LatestEvents.module.css';

function LatestEvents() {
  const [poster] = useState([
    {image: poster3, title: 'Creative Workshops', desc: 'Interactive lessons on music, Tuesday & Friday 5PM IST | Sunday 1PM IST '},
    {image: poster2, title: 'Podcasts with Influencers', desc: 'Weekly Videos & Live  Broadcasts, Tips from professionals amd budding artists in the industry. '},
    {image: poster1, title: 'Song Writing Sessions', desc: 'Music is an art, write songs with us and let\'s see what we can create, Weekends@ 10PM'},
  ])

  let posterList = '';
  if(poster.length > 0) {
    posterList = poster.map((p,i) => (
      <div key={i} className={`carousel-item ${i===0 ? 'active' : ''}`}>
      <img style={{filter: 'brightness(60%)'}} src={p.image} className={`${css.b_latestevents_slideimage} d-block w-100`} alt={p.image} />
      {/* <div style={{filter: 'brightness(60%)', backgroundImage: `url(${p.image})`}} className={`${css.b_latestevents_slideimage} d-block w-100`}></div> */}
      <div className="carousel-caption d-none d-md-block">
        <h5 className={css.b_latestevents_slideimage_heading} >{p.title}</h5>
        <p>{p.desc}</p>
      </div>
    </div>
    ))
  }
    return (
        <div id="carouselExampleCaptions" className={`${css.b_latestevents_container} carousel slide`} data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          {posterList}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default LatestEvents;
