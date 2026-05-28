import React from "react";
import '../css/aboutContent.css';
import aboutImg from "../img/image6.png";
export default function About () {
    return (
        <section className="aboutbox" id="about">
            <h1 className="servtitle"><span>About</span> Us</h1>

            <div className="aboutrow">
                <div className="imgbox">
                    <img src={aboutImg} alt="About" />
                </div>

                <div className="content">
                    <h3>We take care of your healthy life</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sit molestias accusantium at nemo itaque, praesentium in, molestiae ex pariatur enim? Minus dolorum fugiat officiis consequuntur, quidem odio ipsa quo.
                        Impedit alias ex, quaerat similique dolores nobis ea itaque sint incidunt maiores quidem deleniti ut eaque corrupti aliquid molestiae vero ipsam doloremque nihil, sunt mollitia iste fugiat provident a? Sequi.
                    </p>

                    <a className="secbutt" href="#">
                        <span>Learn More</span>
                        <svg className="appsvg" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 16 16" >
                            <path d="M6 -3.49691e-07L14 8L6 16L4 16L4 -4.37114e-07L6 -3.49691e-07Z"></path> 
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
