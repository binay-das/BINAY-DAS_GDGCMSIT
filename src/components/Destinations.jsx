import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import { useRef } from "react";

import './Destinations.css';

const images = [
    { src: "/destinations/destinations-EiffelTower.webp", text: "Eiffel Tower", p: 'The Eiffel Tower is an iconic iron lattice tower in Paris, built for the 1889 Worlds Fair, standing at 324 meters tall.' },
    { src: "/destinations/destinations-GiantWheel.webp", text: "London Eye", p: 'The London Eye, a striking 135-meter tall observation wheel on the South Bank of the Thames, offers panoramic views of the citys landmarks.' },
    { src: "/destinations/destinations-Maldives.jpg", text: "Maldives", p: 'Male Beach, the pristine stretch of golden sand on Malé Atoll, offers a serene escape with crystal-clear waters and vibrant marine life.' },
    { src: "/destinations/destinations-Museum.jpg", text: "Museum", p: 'The Museum of the Future in Dubai is a visionary architectural gem that explores cutting-edge innovations and the potential of tomorrows technology.' },
    { src: "/destinations/destinations-TajMahal.jpg", text: "Taj Mahal", p: 'The Taj Mahal, a majestic white marble mausoleum in Agra, is a timeless symbol of love and architectural brilliance.' },
    { src: "/destinations/destinations-LehLadakh.jpg", text: "Leh Ladakh", p: 'Leh Ladakh, a breathtaking high-altitude region in northern India, captivates with its rugged landscapes, serene monasteries, and vibrant cultural heritage.' },
    { src: "/destinations/destinations-TimesSquare.jpg", text: "Times Square", p: 'Times Square is a vibrant commercial and entertainment hub in New York City, renowned for its bright lights, Broadway theaters, and bustling atmosphere.' },
];

export default function Destinations() {
    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <div className="destinations-section max-w-[var(--max-width)] relative mx-auto mt-12">
    <h2 className="heading-h text-center text-4xl font-extrabold text-blue-300">Explore Top Destinations</h2>
    <p className="events-section-p text-xl text-center mb-16">Explore your dream places around the world. Here you can find your perfect destination.</p>

    <div className="flex justify-center items-center collection mx-auto">
        <div className="swiper-wrapper flex items-center justify-center w-full h-full">
            <Swiper
                modules={[Navigation]}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                loop={true}
                className="mySwiper h-[442px] flex justify-center items-center"
                slidesPerView={5}
                centeredSlides={true}
                initialSlide={0}
                spaceBetween={200}
                onInit={(swiper) => (swiperRef.current = swiper)}
                speed={800}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    480: { slidesPerView: 3 },
                    640: { slidesPerView: 5 },
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide
                        key={index}
                        className="swiper-slide flex justify-center items-center transition-all duration-500"
                    >
                        <div className="each-div group relative rounded-2xl overflow-hidden h-[442px] w-[300px] border-[8px] border-solid border-[#6A5ACD]">
                            <img
                                src={image.src}
                                alt={image.text}
                                className="w-full h-full object-cover transition-transform transition-filter duration-300 ease-in-out group-hover:blur-sm group-hover:scale-110"
                            />
                            <div className="overlay absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="text absolute inset-0 flex flex-col gap-4 justify-center items-center text-center">
                                    <h1 className="text-white text-xl font-bold">{image.text.toUpperCase()}</h1>
                                    <p className="text-gray-300 px-1">{image.p}</p>
                                    <button className="bg-white text-red-500 rounded px-4 py-2 mt-2">Book Tour</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div 
                className="swiper-button-prev absolute left-10 top-1/2 -translate-y-1/2 z-[1001] cursor-pointer"
                onClick={handlePrev}
            >
                <FontAwesomeIcon 
                    icon={faAngleLeft} 
                    className="text-7xl text-white/80 hover:text-red-500 w-[50px] "
                />
            </div>
            <div 
                className="swiper-button-next absolute right-10 top-1/2 -translate-y-1/2 z-[1001] cursor-pointer"
                onClick={handleNext}
            >
                <FontAwesomeIcon 
                    icon={faAngleRight} 
                    className="text-7xl text-white/80 hover:text-red-500"
                />
            </div>
        </div>
    </div>
</div>

    );
}
