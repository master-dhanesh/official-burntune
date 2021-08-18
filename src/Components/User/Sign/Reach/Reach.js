import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import { RegisteringEnquiry } from "../../../../Store/Actions";
import Footer from "../../Footer/Footer";
import Navigation from "../../Navigation/Navigation";

import css from "../Login.module.css";
import boy1 from "../../../../assets/boy1.png";
import { useDispatch } from "react-redux";

import emailjs from "emailjs-com";

function Reach() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { subject, instrument } = useParams();

  const SubmitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q3rusqi",
        "template_x4wl77h",
        e.target,
        "user_BEqlI6qI93gbir74xXnOh"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );

    let name = e.target.name.value;
    let email = e.target.email.value;
    let contact = e.target.contact.value;
    const enquiry = { name, email, contact, instrument, type: subject };
    if (history.location.pathname.match("/business")) {
      delete enquiry.instrument;
    }
    dispatch(RegisteringEnquiry(enquiry, history));
  };
  return (
    <div className={css.b_login_container}>
      <div className={css.b_login_Navigation}>
        <Navigation />
      </div>
      <section className={`${css.b_login_section} pt-5 pb-5`}>
        <div className={css.b_login_img}>
          <img src={boy1} alt={boy1} />
        </div>

        <div className={css.b_login_content}>
          <div>
            <h1>
              HOW CAN WE <br />
              <span>REACH</span>
              &nbsp;YOU &nbsp;?
            </h1>

            <form onSubmit={SubmitHandler}>
              <div className="mb-3">
                <input
                  minLength="4"
                  required
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="FULL NAME"
                />
              </div>

              <div className="mb-3">
                <input
                  required
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>

              <div className="mb-3">
                <input
                  pattern="\d*"
                  minLength={10}
                  maxLength={12}
                  required
                  type="text"
                  name="contact"
                  className="form-control"
                  placeholder="Contact Number"
                />
              </div>

              <input
                readOnly
                hidden
                name="message"
                value="Sit tight we'll contact you soon."
                type="text"
              />
              <input
                readOnly
                hidden
                name="subject"
                value={`Enquiry regarding ${subject} classes`}
                type="text"
              />

              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
            <br />
            <small className="text-dark">
              Go to
              <span className="text-primary" onClick={() => history.goBack()}>
                Back
              </span>
              |
              <Link className="text-decoration-none" to="/">
                Home
              </Link>
            </small>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Reach;
