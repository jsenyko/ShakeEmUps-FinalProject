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

    return (
        <div className={state? "Header sticky" : "Header"}>
            <div className="Name">
                <p>What's Shakin'</p>
            </div>
            <div className="Logo">
                <img src="https://cdn1.iconfinder.com/data/icons/food-and-drinks-2-15/24/cocktail-shaker-512.png" alt="" />
            </div>
            <div className="NavBar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Favorites</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
};