import React, { useEffect, useRef, useState } from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const tours = [
    { img: "/tours/Santorini.png", location: "Santorini, Aegean Sea", rating: 4.2, price: 300 },
    { img: "/tours/Peru.png", location: "Machu Picchu, Peru", rating: 4.5, price: 450 },
    { img: "/tours/Arizona.png", location: "Grand Canyon National Park, Arizona", rating: 4.7, price: 400 },
];

export default function TourPackages() {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current);
                }
            },
            {
                threshold: 0.1
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            className={`tour-packages-section m-auto ${inView ? "pop-up" : ""}`}
            ref={ref}
        >
            <h1 className="tour-packages-h text-center">Best Trip Packages</h1>
            <p className="tour-packages-p">Top trip deals curated for you. Get the best package for your adventure and save more.</p>

            <div className="tour-grid justify-evenly">
                {tours.map((tour, index) => (
                    <div className="tour-card" key={index}>
                        <img src={tour.img} alt="" />
                        <div className="tour-details">
                            <p className="tour-details-p text-center text-black font-semibold">{tour.location}</p>
                            <div className="rating mx-auto">
                                <FontAwesomeIcon icon={faStar} /> {tour.rating}
                            </div>
                            <div className="booking-price flex justify-between items-center">
                                <div className="price font-semibold">
                                    <span>From</span> ${tour.price}
                                </div>
                                <a className="book-anchor" href=""><button className="book-now btn-style">Book Now</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="view-btns flex flex-col items-center">
                <a href=""><button className="view-btn">View All</button></a>
                <br />
                <a href=""><button className="view-btn">View Trending</button></a>
            </div>
        </div>
    );
}
