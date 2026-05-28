import React from "react";
import '../css/formContent.css';
import '../css/bookContent.css';
import img1 from "../img/image7.png";
export default function Book () {
    return (
        <section className="bookbox" id="book">
            <h1 className="booktitle">Book <span>Now</span></h1>
            <div className="bookrow">
                <div className="imgbox">
                    <img src={img1} alt=""/>
                </div>
                <div className="databox">
                    <form className="formbox" action="" method="">
                        <h2 className="titlebox">Book Appointment</h2>
                        <div>
                            <input className="textfield" name="firstName" autocomplete="off" type="text" placeholder="Enter Name"/>
                        </div>
                        <div>
                            <input className="textfield" name="lastName" autocomplete="off" type="text" placeholder="Enter Number"/>
                        </div>
                        <div>
                            <input className="textfield" name="eMail" autocomplete="off" type="text" placeholder="Enter E-mail"/>
                        </div>
                        <div>
                            <input className="textfield" name="gender" autocomplete="off" type="date" placeholder="Enter Date"/>
                        </div>
                        <div>
                            <button className="formbutton" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
