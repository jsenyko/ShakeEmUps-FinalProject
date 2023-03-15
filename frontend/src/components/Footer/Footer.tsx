import "./footer.css";
import * as React from 'react';

export function Footer(){

    return (
        <div className="Footer">
        <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
        </div>
        <div className="SocialMedia">
          <a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a><br />
          <span> | </span>
          <a href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a><br />
          <span> | </span>
          <a href="https://www.twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a><br />
          <span> | </span>
          <a href="https://www.pinterest.com" target="_blank"><i className="fa-brands fa-pinterest"></i></a><br />
       </div>
        <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <p>© Group 3 Final Project | JavaScript AHBC September 2022</p>
        </div>

    )
};
