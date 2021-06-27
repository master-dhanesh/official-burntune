import React from 'react';

import dummy1 from '../../.././../assets/dummy1.jpg';
import dummy2 from '../../.././../assets/dummy2.jpg';
import dummy3 from '../../.././../assets/dummy3.jpg';

import css from './LatestEvents.module.css';

function LatestEvents() {
    return (
        <div id="carouselExampleCaptions" className={`${css.b_latestevents_container} carousel slide`} data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={dummy1} className={`${css.b_latestevents_slideimage} d-block w-100`} alt={dummy1} />
            <div className="carousel-caption d-none d-md-block">
              <h5 className={css.b_latestevents_slideimage_heading} >First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
          <img src={dummy2} className={`${css.b_latestevents_slideimage} d-block w-100`} alt={dummy2}   />
            <div className="carousel-caption d-none d-md-block">
              <h5 className={css.b_latestevents_slideimage_heading} >Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
          <img src={dummy3} className={`${css.b_latestevents_slideimage} d-block w-100`}alt={dummy3} />
            <div className="carousel-caption d-none d-md-block">
              <h5 className={css.b_latestevents_slideimage_heading}>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
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
