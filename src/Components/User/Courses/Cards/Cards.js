import Slider from "react-slick";


import dummy1 from "../../../../assets/dummy1.jpg";
import dummy2 from "../../../../assets/dummy2.jpg";
import dummy3 from "../../../../assets/dummy3.jpg";
import React from "react";

function Cards() {
  let SlideToShow = 3;
  if(window.innerWidth >= 320 && window.innerWidth <= 767  ){
    SlideToShow = 1;
  }
  if(window.innerWidth >= 768 && window.innerWidth <= 1024  ){
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

  return (
    <div className="w-75 m-auto">
      <Slider {...settings}>
        <div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={dummy1} className="card-img-top" alt={dummy1} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
        <div>
        <div className="card" style={{ width: "18rem" }}>
            <img src={dummy2} className="card-img-top" alt={dummy1} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
        <div>
        <div className="card" style={{ width: "18rem" }}>
            <img src={dummy3} className="card-img-top" alt={dummy1} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
        <div>
        <div className="card" style={{ width: "18rem" }}>
            <img src={dummy1} className="card-img-top" alt={dummy1} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
        <div>
        <div className="card" style={{ width: "18rem" }}>
            <img src={dummy2} className="card-img-top" alt={dummy1} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
        <div>
        <div className="card" style={{ width: "18rem" }}>
            <img src={dummy3} className="card-img-top" alt={dummy1} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Cards;
