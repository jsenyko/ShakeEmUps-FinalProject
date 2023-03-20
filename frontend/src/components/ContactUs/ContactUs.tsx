import "./ContactUs.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function ContactUs() {

    
    return (
        <div className="Contact" id="contactus">
            <form>
            <div className="contactName">
                <h1>CONTACT</h1>
                <h2>GET IN TOUCH</h2>
                <div className="name">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="user_name" placeholder="Enter your name" />
                </div>
                <div className="contactEmail">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="user_email" placeholder="Enter a valid email address" />
                </div>
                <div className="contactEmail">
                    <label htmlFor="message">Message:</label>
                    <textarea id="subject" name="message" placeholder="Write something.."></textarea>

                    <input type="submit" value="Submit" />
                </div>

            </div>
        </form>
        </div>
    );
}