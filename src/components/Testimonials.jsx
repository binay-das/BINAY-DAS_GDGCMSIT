import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import testimonial1 from "/testimonials/testimonial1.jpg";
import testimonial2 from "/testimonials/testimonial2.jpg";
import testimonial3 from "/testimonials/testimonial3.jpg";

export default function Testimonials() {
    return (
        <div className="testimonials-section flex flex-col justify-center items-center m-auto py-10">
            <h1 className="events-section-h">Testimonials</h1>

            <div className="testimonials-cards flex justify-center items-center gap-2">
                <div className="testimonial-card">
                    <div className="image-container">
                        <img src={testimonial1} alt="Testimonial 1" className="testimonial-img front" />
                        <div className="card-back">

                            <p className="testimonial-text">
                                <sup><FontAwesomeIcon icon={faQuoteLeft} className="quote-left" /></sup>
                                TourGuide made our dream vacation a reality! From the breathtaking landscapes to the seamless logistics, every moment was a new adventure. The personalized itinerary and expert guides added a special touch to our journey. We can't wait to book our next trip with TourGuide!
                                <sup><FontAwesomeIcon icon={faQuoteRight} className="quote-right" /></sup>
                            </p>

                            <h3 className="testimonial-title mt-8">Josheph</h3>
                        </div>
                    </div>
                </div>

                <div className="testimonial-card">
                    <div className="image-container">
                        <img src={testimonial2} alt="Testimonial 2" className="testimonial-img front" />
                        <div className="card-back">
                            <p className="testimonial-text">
                                <sup><FontAwesomeIcon icon={faQuoteLeft} className="quote-left" /></sup>
                                Traveling with the family has never been easier! TourGuide took care of every detail, ensuring a stress-free and enjoyable vacation for all. The kid-friendly activities and family-oriented guides made our trip unforgettable.
                                <sup><FontAwesomeIcon icon={faQuoteRight} className="quote-right" /></sup>
                            </p>
                            <h3 className="testimonial-title">Katie</h3>
                        </div>
                    </div>
                </div>

                <div className="testimonial-card">
                    <div className="image-container">
                        <img src={testimonial3} alt="Testimonial 3" className="testimonial-img front" />
                        <div className="card-back">
                            <p className="testimonial-text">
                                <sup><FontAwesomeIcon icon={faQuoteLeft} className="quote-left" /></sup>
                                Our cultural tour with TourGuide exceeded all expectations. The immersive experiences, knowledgeable guides, and carefully curated activities allowed us to connect with the local culture in a way we never thought possible. Thanks to TourGuide.
                                <sup><FontAwesomeIcon icon={faQuoteRight} className="quote-left" /></sup>
                            </p>
                            <h3 className="testimonial-title">Charles</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
