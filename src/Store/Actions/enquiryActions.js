import { firestore } from '../../helpers/FirebaseConfiguration';
import nodeMailer from 'nodemailer';

export const RegisteringEnquiry = (EnquiryDetails) => dispatch => {
    const date = new Date();
    const timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    EnquiryDetails.timestamp = timestamp;
    console.log(EnquiryDetails);
    firestore.collection("enquiry").add(EnquiryDetails)
        .then(() => {
            console.log("User Enquiry Registered!");
            SendMail(EnquiryDetails);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const SendMail = (details) => {
    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dhanesh1296@gmail.com',
            pass: 'Master51198@'
        }
    });
    let mailOptions = {
        from: '"BURNTUNE" <burntune@gmail.com>', // sender address
        to: "dhanesh1296@gmail.com", // list of receivers
        subject: details.type, // Subject line
        text: JSON.stringify(details)
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) return console.log(error);
        console.log(info);
    });
}