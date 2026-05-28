import { useState } from "react";
import img1 from "../img/Image29.jpg";
import img2 from "../img/Image28.jpg";
import img3 from "../img/Image27.jpg";
import '../css/clientReviewContent.css';
export default function Review () {
    const reviews = [
        {
            img: img1,
            name: "John Doe",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eligendi architecto vero reprehenderit nemo aperiam cupiditate odit..."
        },
        {
            img: img2,
            name: "John Doe",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eligendi architecto vero reprehenderit nemo aperiam cupiditate odit..."
        },
        {
            img: img3,
            name: "John Doe",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eligendi architecto vero reprehenderit nemo aperiam cupiditate odit..."
        }
    ];
    return (
        <section className="reviewbox" id="review">
            <h1 className="booktitle">Client's <span>Review</span></h1>
            <div className="reviewrow">
                {reviews.map ((rev, index) => (
                    <ClientReview
                        key={index}
                        img={rev.img}
                        name={rev.name}
                        text={rev.text}
                    />
                ))}
            </div>
        </section>
    );
}
function ClientReview ({ img, name, text }) {
    const [rating, setRating] = useState(0);
    return (
        <div className="client">
            <img src={img} width="300px" alt={name} />
            <h3>{name}</h3>
            <div className="star-rating">
                <input
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                />
                <div className="stars">
                    {[1, 2, 3, 4, 5].map((star, index) => (
                        <span
                            key={index}
                            className={`star ${index < rating ? "star-filled" : ""}`}
                        >
                            ★
                        </span>
                    ))}
                </div>
            </div>

            <p className="reviewtext">{text}</p>
        </div>
    );
}
