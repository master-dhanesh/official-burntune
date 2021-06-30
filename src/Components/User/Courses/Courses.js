import React from "react";

import dashlogo from "../../../assets/dashlogo.png";
import Cards from "./Cards/Cards";
import css from "./Courses.module.css";

function Courses() {
  return (
    <div className={css.b_courses_container}>
      <h1 className={css.b_courses_heading}>
        Collaborative learning with
        <span className="fw-normal"> creative folks like you</span>
      </h1>
      <br />
      <p className={css.b_courses_para}>
      Choose an instrument or just your voice to start an unforgettable journey as you begin your journey in learning Music with us
      </p>
      <br /> <br />

        <Cards />

      <h1 style={{ lineHeight: ".7em" }} className={css.b_courses_heading}>
        Latest @burntune
      </h1>
      <img src={dashlogo} alt={dashlogo} />
      <br /><br />
    </div>
  );
}

export default Courses;