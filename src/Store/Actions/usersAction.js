import {
    SIGN_FAIL,
    SIGN_IN_SUCCESS,
    SIGN_OUT,
} from '../ActionTypes';
import { firebase, provider, firestore } from '../../helpers/FirebaseConfiguration';


export const UpdateUser = (UpdatedUser) => dispatch => {
    const { displayName, email, instrument, phoneNumber, photoURL, timestamp, trial } = UpdatedUser;
    firestore
        .collection('users')
        .doc(UpdatedUser._id)
        .set({ displayName, email, instrument, phoneNumber, photoURL, timestamp, trial });
         RestoreSession();
}

export const RestoreSession = () => dispatch => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('User Signed In');

            firestore.collection("users").get().then((querySnapshot) => {
                let regusers = querySnapshot.docs.map(doc => ({ ...doc.data(), _id: doc.id }));
                let curruser = regusers.filter(u => u.email === user.email)[0];
                dispatch(SigninSuccess(curruser));
            });
        } else {
            console.log('No User Found');
        }
    });
}

// export const EmailVerification = () => dispatch => {
//     firebase.auth().currentUser.sendEmailVerification()
//         .then(() => {
//             alert('Email verification sent!');
//         });
// }

export const SigninUser = (instrument, history) => dispatch => {

    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // if (result.user.emailVerified) {
                const { displayName, photoURL, email, phoneNumber } = result.user;
                const date = new Date();
                const timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
                const userDetails = { displayName, photoURL, email, phoneNumber, instrument, timestamp, trial: false };

                firestore.collection("users").get().then((querySnapshot) => {
                    let regusers = querySnapshot.docs.map(doc => ({ ...doc.data(), _id: doc.id }));
                    let curruser = regusers.filter(u => u.email === email);
                    if (curruser.length === 0) {
                        firestore.collection("users").add(userDetails)
                            .then(() => {
                                history.push('/auth/profile');
                                console.log("User Successfully Registered!");
                            })
                            .catch((error) => {
                                dispatch(Error(error))
                            });
                    } else {
                        console.log("User Already Exists!");
                    }
                });
                dispatch(SigninSuccess(userDetails));
            // } else {
                // EmailVerification();
            // }
        }).catch((error) => {
            dispatch(Error(error))
        });
}


export const RegisterNewUser = (newUser) => dispatch => {
    const { name, email, password, instrument }  = newUser;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            const { photoURL, email, phoneNumber } = user;
            const date = new Date();
            const timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
            const userDetails = { displayName: name, photoURL, email, phoneNumber, instrument, timestamp, trial: false };


            firestore.collection("users").get().then((querySnapshot) => {
                let regusers = querySnapshot.docs.map(doc => ({ ...doc.data(), _id: doc.id }));
                let curruser = regusers.filter(u => u.email === email);
                if (curruser.length === 0) {
                    firestore.collection("users").add(userDetails)
                        .then(() => {
                            console.log("User Successfully Registered!");
                        })
                        .catch((error) => {
                            dispatch(Error(error))
                        });
                } else {
                    console.log("User Already Exists!");
                }
            });
            dispatch(SigninSuccess(userDetails));
        })
        .catch((error) => {
            dispatch(Error(error))
        });
}


export const SigninUserEmail = (details, history) => dispatch => {
    const {email, password} = details;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // var user = userCredential.user;
    firestore.collection("users").get().then((querySnapshot) => {
        let regusers = querySnapshot.docs.map(doc => ({ ...doc.data(), _id: doc.id }));
        let curruser = regusers.filter(u => u.email === email)[0];
        history.push('/auth/profile');
        dispatch(SigninSuccess(curruser));
    });
  })
  .catch((error) => {
    dispatch(Error(error))
  });
}

export const SigninSuccess = (user) => ({
    type: SIGN_IN_SUCCESS,
    payload: user
});


export const SignOut = (history) => dispatch => {
    firebase.auth().signOut().then(() => {
        history.push('/login');
        dispatch(SignOutSuccess())
    }).catch((error) => {
        dispatch(Error(error))
    });
}

export const SignOutSuccess = () => ({
    type: SIGN_OUT,
});

export const Error = (error) => ({
    type: SIGN_FAIL,
    payload: error
});