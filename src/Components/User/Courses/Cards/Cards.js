import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import css from "./Cards.module.css";


import ukulele from "../../../../assets/ukulele.jpg";
import piano from "../../../../assets/piano.jpg";
import guitar from "../../../../assets/guitar.jpg";
import singing from "../../../../assets/singing.jpg";
import production from "../../../../assets/production.jpg";
import rhythm from "../../../../assets/rhythm.jpg";


function Cards() {
  const [card] = useState([
    {
      title: "Ukulele",
      image: ukulele,
      desc: "A Ukulele is proof that being Musical isn’t impossible.",
      desc1: "Learn the Ukulele to start strumming your favourite tunes.",
    },
    {
      title: "Guitar",
      image: guitar,
      desc: "A Guitar stretches your imagination to whereever you wish to take it musically.",
      desc1: "Learn the Guitar to unlock your enegy to play everlasting songs",
    },
    {
      title: "Singing",
      image: singing,
      desc: "Everyone can sing. But many have been made to believe they will never be able to.",
      desc1: "Learn to train your Voice to Sing to discover the beauty of your human instrument.",
    },
    {
      title: "Piano",
      image: piano,
      desc: "A Piano of any kind is a Pandora’s box to what is possible with Music.",
      desc1: "Learn the Piano to reimagine the way you have been listening to songs.",
    },
    {
      title: "Rhythm",
      image: rhythm,
      desc: "Rhythm is the foundation of Music and cannot be imagined without.",
      desc1: "Learn Percussion to bring life back into to the room.",
    },
    {
      title: "Music Production",
      image: production,
      desc: "Technology has made it much easier to create and share Music.",
      desc1: "Learn Music Production to begin your journey as an Artist.",
    },
  ]);

  let SlideToShow = 3;
  if (window.innerWidth >= 320 && window.innerWidth <= 767) {
    SlideToShow = 1;
  }
  if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
    SlideToShow = 2;
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: SlideToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
  };

  let cardList = "";
  if (card.length > 0) {
    cardList = card.map((c, i) => (
      <div key={i}>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className={`${css.b_cards_image} card-img-top`}
            src={c.image}
            alt={c.image}
          />
          <div className="card-body">
            <h5 className={`${css.b_cards_title} card-title`}>
            <Link  to={`/users/card/${c.title}`}>
            <span className="text-dark"> {c.title}</span>
             
            </Link>
            </h5>
            <p className={`${css.b_cards_desc} card-text`}>{c.desc}</p>
            <p className={`${css.b_cards_desc1} card-text`}>{c.desc1}</p>
            {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className="w-75 m-auto text-dark">
      <Slider {...settings}>{cardList}</Slider>
    </div>
  );
}

export default Cards;
