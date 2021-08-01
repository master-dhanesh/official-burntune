import {
    SIGN_FAIL,
    SIGN_IN_SUCCESS,
    SIGN_OUT,
} from '../ActionTypes';
import { firebase, provider, firestore } from '../../helpers/FirebaseConfiguration';


export const RestoreSession = () => dispatch => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('User Signed In');
            const { displayName, photoURL, email, phoneNumber } = user;
            const userDetails = { displayName, photoURL, email, phoneNumber };
            dispatch(SigninSuccess(userDetails));
        } else {
            console.log('No User Found');
        }
    });
}

export const EmailVerification = () => dispatch => {
    firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
            alert('Email verification sent!');
        });
}

export const SigninUser = () => dispatch => {

    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            if (result.user.emailVerified) {
                const { displayName, photoURL, email, phoneNumber } = result.user;
                const date = new Date();
                const timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
                const userDetails = { displayName, photoURL, email, phoneNumber, timestamp };

                firestore.collection("users").get().then((querySnapshot) => {
                   let regusers = querySnapshot.docs.map(doc => ({...doc.data(), _id: doc.id}));
                   let curruser = regusers.filter(u => u.email === email);   
                   if(curruser.length === 0){
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
            } else {
                EmailVerification();
            }
        }).catch((error) => {
            dispatch(Error(error))
        });
}


// export const SigninUser = () => dispatch => {
//     firebase.auth().signInWithRedirect(provider);
//     firebase.auth()
//         .getRedirectResult()
//         .then((result) => {
//             if (result.credential) {
//                 // var credential = result.credential;
//                 // var token = credential.accessToken;
//             }
//             // The signed-in user info.
//             var user = result.user;
//             const { displayName, photoURL, email, phoneNumber } = user;
//             const userDetails = { displayName, photoURL, email, phoneNumber };
//             dispatch(SigninSuccess(userDetails));
//         }).catch((error) => {
//             dispatch(Error(error))
//         });
// }

export const SigninSuccess = (user) => ({
    type: SIGN_IN_SUCCESS,
    payload: user
});


export const SignOut = () => dispatch => {
    firebase.auth().signOut().then(() => {
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