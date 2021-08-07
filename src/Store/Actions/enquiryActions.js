import { firestore } from '../../helpers/FirebaseConfiguration';
// import emailjs from 'emailjs-com';

export const RegisteringEnquiry = (EnquiryDetails, history) => dispatch => {
    const date = new Date();
    const timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    EnquiryDetails.timestamp = timestamp;
    firestore.collection("enquiry").add(EnquiryDetails)
        .then(() => {
            console.log("User Enquiry Registered!");
            history.push('/feedback')
        })
        .catch((error) => {
            console.log(error);
        });
}

export const RegisteringEnquirySubs = (EnquiryDetails, history) => dispatch => {
    const date = new Date();
    const timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    EnquiryDetails.timestamp = timestamp;
    firestore.collection("enquiry").add(EnquiryDetails)
        .then(() => {
            console.log("User Enquiry Registered!");
            history.push('/feedback')
        })
        .catch((error) => {
            console.log(error);
        });
}

// export const SendMail = (e) => {
//     emailjs.sendForm('service_q3rusqi', 'template_x4wl77h', e, 'user_BEqlI6qI93gbir74xXnOh')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });
// }