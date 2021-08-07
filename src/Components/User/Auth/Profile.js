import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import {  displayRazorpay } from '../../../utils/PaymentGateway';

import { UpdateUser } from '../../../Store/Actions';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

import noimage from '../../../assets/noimage.png';
import css from './Profile.module.css';
import { Redirect, useHistory } from 'react-router';

function Profile() {
    const [state, setstate] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();

    const { isUser, user } = useSelector((state) => state.userReducer);
    const UpdatedUserDetails = { ...user };
    // console.log(UpdatedUserDetails);

    const SelectInstrument = (e) => {
        // console.log(e.target.value);
        UpdatedUserDetails.instrument = e.target.value;
        dispatch(UpdateUser(UpdatedUserDetails))
        setstate(!state);
    }

    const UpdateContact = (e) => {
        e.preventDefault();
        // console.log(e.target.phoneNumber.value);
        UpdatedUserDetails.phoneNumber = e.target.phoneNumber.value;
        dispatch(UpdateUser(UpdatedUserDetails))
        setstate(!state);
    }

    const JoinCourse = (e) => {
        e.preventDefault();

        if (user.instrument === 'no-instrument') {
            return alert('Choose an instrument first...')
        }
        // displayRazorpay(user);
        setTimeout(() => {
            history.push('/feedback');
        }, 2000);
    }

    return isUser ? (
        <div className={css.b_login_container}>

            {(!UpdatedUserDetails.phoneNumber) ? 
                <form onSubmit={UpdateContact} style={{top: '20%', left: '50%', transform: 'translate(-50%, -50%)'}} className="position-absolute alert alert-danger row g-3 align-items-center">
                    <label htmlFor="Update Contact">Update Contact</label>
                    <div className="col-auto">
                        <input 
                            placeholder="Phone Number"
                            minLength="10"
                            maxLength="12"
                            required
                            name="phoneNumber"
                            type="text" 
                            pattern="\d*" 
                            className="form-control"/>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-danger">Edit Contact</button>
                    </div>
                </form> : 
                ''
            }
                

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
                        <div style={{ backgroundImage: `url(${(user.photoURL && user.photoURL) || noimage})` }}
                            className={css.b_about_image}></div>
                    </div>

                    <div className="container d-xl-flex d-lg-flex d-md-flex justify-content-around">
                        <div className="p-5" style={{ minWidth: '50%' }}>
                            <h4 className="">Start Your Journey</h4>
                            <form onSubmit={JoinCourse}>
                                <label htmlFor="exampleDataList" className="form-label">Select Course</label>

                                <select onChange={SelectInstrument} name="chooseInstrument" defaultValue={user.instrument === "no-instrument" ? 0 : user.instrument} className="form-control" defaultChecked={user.instrument} >
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

                        <div className="p-5" style={{ minWidth: '50%' }}>
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