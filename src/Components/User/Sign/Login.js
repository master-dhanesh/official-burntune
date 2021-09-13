import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

import { SigninUserEmail } from "../../../Store/Actions";
import css from "./Login.module.css";
import boy1 from "../../../assets/boy1.png";
import email from "../../../assets/email.png";
// import googlelogo from "../../../assets/googlelogo.png";

function Login() {
  const { error } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  // const SignInUser = () => {
  //   dispatch(SigninUser('no-instrument',history));
  // };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    const LoginDetails = { email, password };
    await dispatch(await SigninUserEmail(LoginDetails));
    history.push("/auth/profile");
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

          {error && error.message ? <div className="alert alert-danger">{error.message}</div>  : ''}

            <h1>
              YOU ARE ONE <br /> STEP AWAY FROM <br />
              <span>JOINING US</span>
            </h1>

            {/* <button onClick={SignInUser}>
              <img height={30} src={googlelogo} alt={googlelogo} />
              &nbsp;&nbsp;
              <span title="Go to register and Signup first">
                Sign in with Google
              </span>
            </button> */}
            {/* <small className="text-danger">Signup with Google First</small> */}

            <div className=" d-flex w-100 justify-content-between align-items-center">
              <hr style={{ width: "100%" }} className="bg-dark text-dark" />
              {/* <span className="text-dark">OR</span> */}
              {/* <hr style={{ width: "45%" }} className="bg-dark text-dark" /> */}
            </div>

            <form onSubmit={SubmitHandler}>
              <div className="mb-3">
                <input
                  required
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="EM@IL"
                />
              </div>

              <div className="mb-3">
                <input
                  minLength={8}
                  required
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="PASSWORD"
                />
              </div>

              <button type="submit" className="btn btn-outline-primary">
                Login
              </button>
            </form>

            {/* <div className={css.b_login_filler}></div> */}

            <div className={` ${css.b_login_bottom}`}>
              <a
                className="invisible text-dark text-decoration-none d-flex justify-content-start align-items-center "
                href="/email"
              >
                <img height={15} src={email} alt={email} />
                &nbsp; Sign in with Email
              </a>
              <small className="text-dark">
                Don't have an account? &nbsp;
                <Link to="/register/no-instrument">Register</Link>
              </small>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Login;
