import { SIGN_FAIL, SIGN_IN_SUCCESS, SIGN_OUT } from "../ActionTypes";
import {
    firebase,
    // provider,
    firestore,
} from "../../helpers/FirebaseConfiguration";

export const UpdateUser = (UpdatedUser) => (dispatch) => {
    const { displayName, email, contact, instrument, phoneNumber, photoURL, timestamp } =
    UpdatedUser;
    firestore
        .collection("users")
        .doc(UpdatedUser._id)
        .set({ displayName, email, contact, instrument, phoneNumber, photoURL, timestamp });
        dispatch(Getsingleuser(UpdatedUser._id));
};

export const RestoreSession = () => (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("User Signed In");
            firestore
                .collection("users")
                .get()
                .then((querySnapshot) => {
                    let regusers = querySnapshot.docs.map((doc) => ({
                        ...doc.data(),
                        _id: doc.id,
                    }));
                    let curruser = regusers.filter((u) => u.email === user.email)[0];
                    dispatch(SigninSuccess(curruser));
                });
        } else {
            console.log("No User Found");
        }
    });
};

// export const EmailVerification = () => dispatch => {
//     firebase.auth().currentUser.sendEmailVerification()
//         .then(() => {
//             alert('Email verification sent!');
//         });
// }

// export const SigninUser = (instrument, history) => (dispatch) => {
//     firebase
//         .auth()
//         .signInWithPopup(provider)
//         .then((result) => {
//             // if (result.user.emailVerified) {
//             const { displayName, photoURL, email, phoneNumber } = result.user;
//             const date = new Date();
//             const timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
//             const userDetails = {
//                 displayName,
//                 photoURL,
//                 email,
//                 phoneNumber,
//                 instrument,
//                 timestamp,
//             };

//             firestore
//                 .collection("users")
//                 .get()
//                 .then((querySnapshot) => {
//                     let regusers = querySnapshot.docs.map((doc) => ({
//                         ...doc.data(),
//                         _id: doc.id,
//                     }));
//                     let curruser = regusers.filter((u) => u.email === email);
//                     if (curruser.length === 0) {
//                         firestore
//                             .collection("users")
//                             .add(userDetails)
//                             .then(() => {
//                                 console.log("User Successfully Registered!");
//                             })
//                             .catch((error) => {
//                                 dispatch(Error(error));
//                             });
//                     } else {
//                         console.log("User Already Exists!");
//                     }
//                 });
//                 dispatch(SigninSuccess(userDetails));
//                 history.push('/auth/profile');
//             // } else {
//             // EmailVerification();
//             // }
//         })
//         .catch((error) => {
//             dispatch(Error(error));
//         });
// };

export const RegisterNewUser = (newUser) => async (dispatch) => {
    const { name, email, password, contact, instrument } = newUser;
    await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (userCredential) => {
            // Signed in
            var user = userCredential.user;
            const { photoURL, email, phoneNumber } = user;
            const date = new Date();
            const timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
            const userDetails = {
                displayName: name,
                photoURL,
                email,
                contact,
                phoneNumber,
                instrument,
                timestamp,
            };

            await firestore
                .collection("users")
                .get()
                .then(async (querySnapshot) => {
                    let regusers = await querySnapshot.docs.map((doc) => ({
                        ...doc.data(),
                        _id: doc.id,
                    }));
                    let curruser = await regusers.filter((u) => u.email === email);
                    if (curruser.length === 0) {
                        firestore
                            .collection("users")
                            .add(userDetails)
                            .then(() => {
                                console.log("User Successfully Registered!");
                            })
                            .catch((error) => {
                                dispatch(Error(error));
                            });
                    } else {
                        console.log("User Already Exists!");
                    }
                });
            dispatch(await SigninSuccess(userDetails));
        })
        .catch((error) => {
            alert(error.message)
            dispatch(Error(error));
        });
};

export const SigninUserEmail = (details) => async (dispatch) => {
    const { email, password } = details;
    await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(async (userCredential) => {
            // var user = userCredential.user;
            await firestore
                .collection("users")
                .get()
                .then(async (querySnapshot) => {
                    let regusers = querySnapshot.docs.map((doc) => ({
                        ...doc.data(),
                        _id: doc.id,
                    }));
                    let curruser =  await regusers.filter((u) => u.email === email)[0];
                    dispatch(await SigninSuccess(curruser));
                });
        })
        .catch((error) => {
            alert(error.message)
            dispatch(Error(error));

        });
};

export const Getsingleuser = (id) => dispatch => {
    const SingleUser = firestore.collection('users').doc(id);
    SingleUser.get().then( doc => {
        dispatch(SigninSuccess(doc.data()));
    });
}

export const SigninSuccess = (user) => ({
    type: SIGN_IN_SUCCESS,
    payload: user,
});

export const SignOut = (history) => (dispatch) => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            history.push("/login");
            dispatch(SignOutSuccess());
        })
        .catch((error) => {
            dispatch(Error(error));
        });
};

export const SignOutSuccess = () => ({
    type: SIGN_OUT,
});

export const Error = (error) => ({
    type: SIGN_FAIL,
    payload: error,
});