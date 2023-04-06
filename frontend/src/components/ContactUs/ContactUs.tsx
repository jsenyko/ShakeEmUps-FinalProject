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
        <div className="ContactUs" id="contactus" >
            <form className="Contact-Container" action=""  onSubmit={sendEmail}>

                <div className="Contact-Header">
                    <h1>Contact Us</h1>
                    <p>Have a suggestion for the App?  Please let us know so we can review and see how we can make the site better!</p>
                </div>

                <div className="Form-Main">
                    <div className="Form-Name">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="user_name" value={value} onChange={(e) => setValue(e.target.value)}  placeholder="Enter your name" />
                    </div>

                    <div className="Form-Email">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter a valid email address" />
                    </div>

                    <div className="Form-Message">
                        <label htmlFor="message">Message:</label>
                        <textarea id="subject" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write something..."></textarea>
                    </div>
                    <div className="Form-Submit">
                        <button type="submit" value="Submit">Submit</button>
                    </div>
                
                </div>
        </form>
        </div>
    );
}
