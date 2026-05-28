import React from "react";
import '../css/homeContent.css';
import imgHome from "../img/image5.png";
export default function Home () {
    return (
        <section className="homebox" id="home">
            <div className="imgbox">
                <img src={imgHome} alt="Home" />
            </div>
            <div className="content">
                <h3>Stay safe, stay healtly</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae veniam placeat eius 
                    asperiores saepe. Quaerat non sunt placeat, autem libero fuga tempora at repellat possimus 
                    obcaecati ullam minima, adipisci unde.
                </p>
                <a className="secbutt" href="#">
                    <span>Contact Us</span>
                    <svg className="appsvg" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 16 16" >
                        <path d="M6 -3.49691e-07L14 8L6 16L4 16L4 -4.37114e-07L6 -3.49691e-07Z"></path> 
                    </svg>
                </a>
            </div>
        </section>
    );
}
