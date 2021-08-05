import React from 'react';
import { useSelector } from 'react-redux';

// import { UpdateUser } from '../../../Store/Actions';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

// import dummy3 from '../../../assets/dummy2.jpg';
import css from './Profile.module.css';
import { Redirect } from 'react-router';

function Profile() {
    // const dispatch = useDispatch();

    const { isUser, user } = useSelector((state) => state.userReducer);
    console.log(user)

    const JoinCourse = (e) => {
        e.preventDefault();
        console.log(e.target.chooseInstrument.value);
    }

    return isUser ? (
        <div className={css.b_login_container}>
            <div className={css.b_login_Navigation}>
                <Navigation />
            </div>
            <section className={`${css.b_login_section}`}>

                <div className={css.b_about_header}>
                    <h6 className={css.b_about_subheading}>HELLO! 👋</h6>
                    <h1 className={css.b_about_heading}>
                        <span className="fw-normal">{user.displayName && user.displayName.toUpperCase()}</span>
                    </h1>
                </div>
                <div className={css.b_about_content}>

                    <div className={css.b_about_profile}>
                        <div style={{ backgroundImage: `url(${user.photoURL && user.photoURL})` }}
                            className={css.b_about_image}></div>
                    </div>

                    <div className="container d-xl-flex d-lg-flex d-md-flex justify-content-around">
                        <div className="p-5" style={{minWidth: '50%'}}>
                            <h4 className="">Start Your Journey</h4>
                            <form onSubmit={JoinCourse}>
                                <label htmlFor="exampleDataList" className="form-label">Select Course</label>

                                <select name="chooseInstrument" defaultValue={user.instrument === "no-instrument" ? 0 : user.instrument} className="form-control" defaultChecked={user.instrument} >
                                    <option value="">Click to select</option>
                                    <option value="Ukelele">Ukelele</option>
                                    <option value="Guitar">Guitar</option>
                                    <option value="Singing">Singing</option>
                                    <option value="Piano" >Piano</option>
                                    <option value="Rhythm" >Rhythm</option>
                                    <option value="Music Production" >Music Production</option>
                                </select>
                                <br />
                                {/* {!user.trial && <button type="button" onClick={JoinTrial} className="btn btn-danger">Confirm Trial Class</button>  } */}
                                <br />
                                <br />
                                <button className="btn btn-success">Join Our Course</button>
                            </form>


                        </div>

                        <div className="p-5" style={{minWidth: '50%'}}>
                            <h4 className="">
                            We do not believe that Burntune is for everybody
                            </h4>
                            <h6 className="text-muted">
                                But the passionate and ambitious few at Burntune can come from
                                anywhere!
                            </h6>

                        </div>
                    </div>


                </div>
                <br /><br />
            </section>
            <Footer />
        </div>
    ) : <Redirect to="/login" />
}

export default Profile