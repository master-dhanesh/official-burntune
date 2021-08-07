import React, { useEffect, useState } from 'react';

import { firestore } from '../../helpers/FirebaseConfiguration';

const Admin = () => {
    const [enquiries, setenquiries] = useState([]);
    const [users, setusers] = useState([]);

    const GetEnquiries = () => {
        firestore.collection("enquiry").get().then((querySnapshot) => {
            let regusers = querySnapshot.docs.map(doc => ({ ...doc.data(), _id: doc.id }));
            setenquiries(regusers);
        });
    }

    const GetUsers = () => {
        firestore.collection("users").get().then((querySnapshot) => {
            let regusers = querySnapshot.docs.map(doc => ({ ...doc.data(), _id: doc.id }));
            setusers(regusers);
        });
    }

    useEffect(() => {
        GetEnquiries();
        GetUsers();
    }, [])

    let listEnquiries = [];
    if(enquiries.length > 0){
        listEnquiries = enquiries.map((e, i) => {
            return (
                <li key={i} className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{e.name}</div>
                        Email: {(e.email && e.email) || ''} <br /> 
                        Instrument: {(e.instrument && e.instrument) || ''} <br />
                        Contact: {(e.contact && e.contact) || ''} <br /> 
                        Type: {(e.type && e.type) || ''} <br /> 
                        Timestamp :{(e.timestamp && e.timestamp) || ''} <br /> 
                        <small>{e._id}</small>
                    </div>
                    <span className="badge bg-danger rounded-pill">Delete</span>
                </li>
            )
        })
    }

    let listUsers = [];
    if(enquiries.length > 0){
        listUsers = users.map((e, i) => {
            return (
                <li key={i} className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{e.displayName}</div>
                        Email: {(e.email && e.email) || ''} <br /> 
                        Instrument: {(e.instrument && e.instrument) || ''} <br />
                        Phone Number: {(e.phoneNumber && e.phoneNumber) || ''} <br /> 
                        Timestamp :{(e.timestamp && e.timestamp) || ''} <br /> 
                        <small>{e._id}</small>
                    </div>
                    <span className="badge bg-danger rounded-pill">Delete</span>
                </li>
            )
        })
    }

    return (
        <div className="w-100 container text-dark pt-5">
        <div className="w-100 d-flex">
            <div className="w-50">
                <h3>List Of Enquiries</h3>
                <ol className="list-group list-group-numbered">
                    {listEnquiries.reverse()}
                </ol>
            </div>
            <div className="w-50">
                <h3>List Of Registered Users</h3>
                <ol className="list-group list-group-numbered">
                    {listUsers.reverse()}
                </ol>
            </div>
        </div>
           

        </div>
    )
}

export default Admin
