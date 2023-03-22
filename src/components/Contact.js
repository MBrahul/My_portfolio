import React, { useState } from 'react';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore";

export default function Contact() {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    });


    const firebaseConfig = {
        apiKey: "AIzaSyBT5y_Ha9DjbhjGuUuvzTa0pdtvb24ASHY",
        authDomain: "protfolio-265ed.firebaseapp.com",
        projectId: "protfolio-265ed",
        storageBucket: "protfolio-265ed.appspot.com",
        messagingSenderId: "449505405706",
        appId: "1:449505405706:web:d5133bb7678a03eb4768f3",
        measurementId: "G-CKHXJB56NN"
    };

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }


    const addData = async () => {
        try {
            if (data.name && data.email && data.message) {
                const app = initializeApp(firebaseConfig);
                const db = getFirestore(app);
                await addDoc(collection(db, "data"), data).then(() => {
                    setData({
                        name: "",
                        email: "",
                        message: ""
                    })
                });
            }
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }
    return (
        <section className="contact-section" id='contact'>
            <h1>Get In Touch</h1>
            <div className="contact-p">
                <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible </p>
            </div>

            <div className="contact">
                <form className='contact-form' action="">
                    <div className="contact-input">
                        <label htmlFor="name" className="contact-form-label">Name</label>
                        <input type="text" name="name" id="name" placeholder='Enter Your Name' value={data.name} onChange={onChange} />
                    </div>
                    <div className="contact-input">
                        <label htmlFor="email" className="contact-form-label">Email</label>
                        <input type="text" name="email" id="email" placeholder='Enter Your Email' value={data.email} onChange={onChange} />
                    </div>
                    <div className="contact-input">
                        <label htmlFor="message" className="contact-form-label">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter Your Message' value={data.message} onChange={onChange}></textarea>
                    </div>
                </form>
                <button className="submit-btn" onClick={addData}>Submit</button>
            </div>
        </section>
    )
}
