import "./contactUs.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export const ContactUs = () => {
  const [result, showResult] = useState(false);

  const [value, setValue] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  

  const sendEmail = (e:React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setValue("");
    setEmail("");
    setMessage("");

    emailjs.sendForm('service_s032k8m', 'template_q1gqdvg', "#contactForm", 'O_VOcJKSuluZDByUr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    //   e.currentTarget.reset();
      showResult(true);
      
  };
    
    return (
        <div className="Contact" id="contactus" >
            <form id="contactForm" action=""  onSubmit={sendEmail}>
            <div className="contactName">
                <h1>CONTACT</h1>
                <div className="name">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="user_name" value={value} onChange={(e) => setValue(e.target.value)}  placeholder="Enter your name" />
                </div>
                <div className="contactEmail">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter a valid email address" />
                </div>
                <div className="contactEmail">
                    <label htmlFor="message">Message:</label>
                    <textarea id="subject" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write something.."></textarea>

                    <input type="submit" value="Submit"  />
                </div>

            </div>
        </form>
        </div>
    );
}
