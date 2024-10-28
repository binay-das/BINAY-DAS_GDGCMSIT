import { useEffect, useState, useRef } from 'react';

export default function About() {
    const [isAboutVisible, setIsAboutVisible] = useState(false);
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

    const aboutRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null, 
            threshold: 0.1, 
        };

        const aboutObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsAboutVisible(true);
            } else {
                setIsAboutVisible(false);
            }
        }, options);

        const descriptionObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsDescriptionVisible(true);
            } else {
                setIsDescriptionVisible(false);
            }
        }, options);

        if (aboutRef.current) {
            aboutObserver.observe(aboutRef.current);
        }
        if (descriptionRef.current) {
            descriptionObserver.observe(descriptionRef.current);
        }

        return () => {
            if (aboutRef.current) {
                aboutObserver.unobserve(aboutRef.current);
            }
            if (descriptionRef.current) {
                descriptionObserver.unobserve(descriptionRef.current);
            }
        };
    }, []);

    return (
        <div className="about-section flex justify-center items-center min-h-screen">
            <div className="about-content flex flex-col justify-between items-center">
                <div className="col-span-2 mx-auto lg:mx-0 lg:text-left">
                    <h1
                        ref={aboutRef}
                        className={`font-black text-4xl mb-8 transition-all duration-[1000ms] delay-[500ms] transform ${
                            isAboutVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                        }`}
                    >
                        About Us
                    </h1>
                </div>
                <article className="w-full text-left format sm:format-base lg:format-lg-blue-500 dark:format-invert">
                    <div className="video-container">
                        <iframe
                            src="https://www.youtube.com/embed/veULUjsSrPg?si=nDiSZ-CNAfl1Aqha"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <p
                        ref={descriptionRef}
                        className={`article-text flex mb-5 transition-all duration-[1000ms] delay-[500ms] transform ${
                            isDescriptionVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                        }`}
                    >
                        Welcome to TourGuide, your trusted companion in discovering the wonders of the world. We provide unparalleled assistance, offering curated itineraries, local guides, and unforgettable experiences tailored just for you. Join our growing community and let your journey become a story worth sharing!
                    </p>
                </article>
            </div>
        </div>
    );
}
