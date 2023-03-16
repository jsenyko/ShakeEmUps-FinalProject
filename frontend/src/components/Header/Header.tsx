import { useState } from "react";
import "./header.css";

export function Header(){

    const [state, setState] = useState(false);
    const changeClassOnScroll = () => {
        const scrollValue = document.documentElement.scrollTop;
        if(scrollValue > 100){
            setState(true);
        } else {
            setState(false);
        };
    };

    window.addEventListener('scroll', changeClassOnScroll);

    const [menuStyle, setMenuStyle] = useState<string>("Hamburger-Container hidden");

    const changeStyle = () => {
       return (menuStyle === "Hamburger-Container visible") ? setMenuStyle("Hamburger-Container hidden") : setMenuStyle("Hamburger-Container visible")
    }

    return (
        <div className={state? "Header sticky" : "Header"}>
            <div className="Name">
                <p>What's Shakin'</p>
                <a href="/" />
            </div>
            <div className="Logo">
                <img src="https://cdn1.iconfinder.com/data/icons/food-and-drinks-2-15/24/cocktail-shaker-512.png" alt="" />
                <a href="/" />
            </div>
            <div className="NavBar">
                <ul>
                   <li><a href="/">Home</a></li>
                    <li><a href="/aboutus">About</a></li>
                    <li><a href="/favorites">Favorites</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            
            <div className="Header-Hamburger">
                <div className="Hamburger-Closed" onClick={changeStyle}><i className="fa-solid fa-bars"></i></div>

                <div className={menuStyle}>
                    <div className="Icon" onClick={changeStyle}><i className="fa-solid fa-x"></i></div>

                    <ul className="Links">
                        <li><a data-text="&nbsp;Home" href="/">Home</a></li>
                        <li><a data-text="&nbsp;About" href="/aboutus">About</a></li>
                        <li><a data-text="&nbsp;Favorites" href="/favorites">Favorites</a></li>
                        <li><a data-text="&nbsp;Contact" href="#">Contact</a></li>
                    </ul>

                    <p>Follow us:</p>
                    <ul className="SocialMedia">
                        <li><a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a></li><br />
                        <li><a href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a></li><br />
                        <li><a href="https://www.twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a></li><br />
                        <li><a href="https://www.pinterest.com" target="_blank"><i className="fa-brands fa-pinterest"></i></a></li><br />
                    </ul>

                    <div className="User">
                        <button className="Login-Hamburger">Login</button>
                        <button className="Sign_Up-Hamburger">Sign Up</button>
                    </div>
                </div>
            </div>
    </div>
    )
};
