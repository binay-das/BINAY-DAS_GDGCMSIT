import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const totalImages = images.length;

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);

        const newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);

        const newIndex = (currentIndex + 1) % totalImages;
        setCurrentIndex(newIndex);
    };

    const handleTransitionEnd = () => setIsTransitioning(false);

    const getSizeClass = (index) => {
        const diff = (index - currentIndex + totalImages) % totalImages;

        if (diff === 0) return "scale-100 z-10 blur-0 opacity-100"; 
        if (diff === 1 || diff === totalImages - 1)
            return "scale-90 -ml-10 -mr-10 z-5 blur-sm opacity-90"; 
        if (diff === 2 || diff === totalImages - 2)
            return "scale-75 -ml-10 -mr-10 z-0 blur opacity-80"; 

        return "scale-60 -ml-6 z-0 blur-lg opacity-40"; 
    };

    return (
        <div className="destinations-section relative mx-auto mt-12">
            <h2 className="heading-h text-center text-4xl font-extrabold text-blue-300">
                Explore Top Destinations
            </h2>
            <p className="heading-p text-center text-gray-300">
                Explore your dream places around the world. Here you can find your perfect destination.
            </p>

            <div className="relative flex items-center justify-center pt-2 pb-10">
                {/* <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="absolute left-10 text-5xl cursor-pointer text-white/80 hover:text-white"
                    onClick={handlePrev}
                    z={99999}
                /> */}

                <div className="overflow-hidden flex items-center">
                    <motion.div
                        className="flex"
                        animate={{ x: -currentIndex * 280 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        onAnimationComplete={handleTransitionEnd}
                        style={{ minWidth: `${totalImages * 300}px` }}
                    >

                        {[images[totalImages - 2], images[totalImages - 1], ...images, images[0], images[1]].map(
                            (image, index) => (
                                <motion.div
                                    key={index}
                                    className={`min-w-[300px] h-[442px] transition-all duration-500 ease-in-out ${getSizeClass(
                                        (index - 2 + totalImages) % totalImages
                                    )}`}
                                >
                                    <div className="h-full w-full group overflow-hidden">
                                        <img
                                            src={image.src}
                                            alt={image.text}
                                            className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:blur-sm group-hover:scale-110"
                                            style={{ border: '8px solid #6A5ACD', borderRadius: '20px' }}
                                        />

                                        <div
                                            className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 ease-in-out rounded-[20px]"
                                        ></div>


                                        <div className="text-center px-10 absolute inset-0 flex flex-col gap-8 justify-center text-white opacity-0  group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                            <h1 className=" bg-opacity-50 p-2 text-3xl" style={{ fontSize: '30px', fontWeight: '500' }}>{image.text.toUpperCase()}</h1>
                                            <p style={{ lineHeight: '25px' }}>{image.p}</p>
                                            <div className="text-left">
                                                <button className="bg-white text-red-500 rounded px-4 py-2">Book Tour</button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        )}
                    </motion.div>
                </div>

                <FontAwesomeIcon
                    icon={faAngleRight}
                    className="left-right absolute right-10 text-5xl cursor-pointer text-white/80 hover:font-red"
                    onClick={handleNext}
                />
                <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="left-right absolute left-10 text-5xl cursor-pointer text-white/80 hover:text-white"
                    onClick={handlePrev}
                    z={99999}
                />
            </div>
            
        </div>
    );
}


// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; // Import the necessary Swiper CSS
// import { Navigation } from 'swiper/modules'; // Import Navigation module
// import { useRef } from "react";

// const images = [
//     { src: "/destinations/destinations-EiffelTower.webp", text: "Eiffel Tower", p: 'The Eiffel Tower is an iconic iron lattice tower in Paris, built for the 1889 Worlds Fair, standing at 324 meters tall.' },
//     { src: "/destinations/destinations-GiantWheel.webp", text: "London Eye", p: 'The London Eye, a striking 135-meter tall observation wheel on the South Bank of the Thames, offers panoramic views of the citys landmarks.' },
//     { src: "/destinations/destinations-Maldives.jpg", text: "Maldives", p: 'Male Beach, the pristine stretch of golden sand on Malé Atoll, offers a serene escape with crystal-clear waters and vibrant marine life.' },
//     { src: "/destinations/destinations-Museum.jpg", text: "Museum", p: 'The Museum of the Future in Dubai is a visionary architectural gem that explores cutting-edge innovations and the potential of tomorrows technology.' },
//     { src: "/destinations/destinations-TajMahal.jpg", text: "Taj Mahal", p: 'The Taj Mahal, a majestic white marble mausoleum in Agra, is a timeless symbol of love and architectural brilliance.' },
//     { src: "/destinations/destinations-LehLadakh.jpg", text: "Leh Ladakh", p: 'Leh Ladakh, a breathtaking high-altitude region in northern India, captivates with its rugged landscapes, serene monasteries, and vibrant cultural heritage.' },
//     { src: "/destinations/destinations-TimesSquare.jpg", text: "Times Square", p: 'Times Square is a vibrant commercial and entertainment hub in New York City, renowned for its bright lights, Broadway theaters, and bustling atmosphere.' },
// ];

// export default function Destinations() {
//     const swiperRef = useRef(null); // Create a reference for Swiper

//     return (
//         <div className="destinations-section border-blue-700 relative mx-auto mt-12">
//             <h2 className="heading-h text-center text-4xl font-extrabold text-blue-300">
//                 Explore Top Destinations
//             </h2>
//             <p className="heading-p text-center text-gray-300">
//                 Explore your dream places around the world. Here you can find your perfect destination.
//             </p>

//             <div className="carousel relative flex items-center justify-center pt-2 pb-10">
//                 <FontAwesomeIcon
//                     icon={faAngleLeft}
//                     className="absolute left-10 text-5xl cursor-pointer text-white/80 hover:text-white z-10"
//                     onClick={() => swiperRef.current.swiper.slidePrev()} // Use ref to navigate
//                 />

//                 <Swiper
//                     modules={[Navigation]} // Only Navigation for this example
//                     navigation={{
//                         nextEl: '.swiper-button-next',
//                         prevEl: '.swiper-button-prev',
//                     }}
//                     loop={true} // Enable infinite looping
//                     className="mySwiper flex justify-center"
//                     slidesPerView={1}
//                     spaceBetween={10} // Adjust space between slides if needed
//                     onInit={(swiper) => {
//                         swiperRef.current = swiper; // Set reference to Swiper instance
//                     }}
//                 >
//                     {images.map((image, index) => (
//                         <SwiperSlide key={index} className="swiper-slide flex justify-center items-center">
//                             <div className="swiper-slide-div border-red-600 w-[300px] h-[442px] overflow-hidden group mx-auto">
//                                 <img
//                                     src={image.src}
//                                     alt={image.text}
//                                     className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:blur-sm group-hover:scale-110"
//                                     style={{ border: '8px solid #6A5ACD', borderRadius: '20px' }}
//                                 />

//                                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 ease-in-out rounded-[20px]"></div>

//                                 <div className="text-center px-10 absolute inset-0 flex flex-col gap-8 justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
//                                     <h1 className=" bg-opacity-50 p-2 text-3xl" style={{ fontSize: '30px', fontWeight: '500' }}>{image.text.toUpperCase()}</h1>
//                                     <p style={{ lineHeight: '25px' }}>{image.p}</p>
//                                     <div className="text-left">
//                                         <button className="bg-white text-red-500 rounded px-4 py-2">Book Tour</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//                 <FontAwesomeIcon
//                     icon={faAngleRight}
//                     className="absolute right-10 text-5xl cursor-pointer text-white/80 hover:text-white z-10"
//                     onClick={() => swiperRef.current.swiper.slideNext()} // Use ref to navigate
//                 />
//             </div>
//         </div>
//     );
// }


// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import { Navigation } from 'swiper/modules';
// import { useRef } from "react";

// const images = [
//     { src: "/destinations/destinations-EiffelTower.webp", text: "Eiffel Tower", p: 'The Eiffel Tower is an iconic iron lattice tower in Paris, built for the 1889 Worlds Fair, standing at 324 meters tall.' },
//     { src: "/destinations/destinations-GiantWheel.webp", text: "London Eye", p: 'The London Eye, a striking 135-meter tall observation wheel on the South Bank of the Thames, offers panoramic views of the citys landmarks.' },
//     { src: "/destinations/destinations-Maldives.jpg", text: "Maldives", p: 'Male Beach, the pristine stretch of golden sand on Malé Atoll, offers a serene escape with crystal-clear waters and vibrant marine life.' },
//     { src: "/destinations/destinations-Museum.jpg", text: "Museum", p: 'The Museum of the Future in Dubai is a visionary architectural gem that explores cutting-edge innovations and the potential of tomorrows technology.' },
//     { src: "/destinations/destinations-TajMahal.jpg", text: "Taj Mahal", p: 'The Taj Mahal, a majestic white marble mausoleum in Agra, is a timeless symbol of love and architectural brilliance.' },
//     { src: "/destinations/destinations-LehLadakh.jpg", text: "Leh Ladakh", p: 'Leh Ladakh, a breathtaking high-altitude region in northern India, captivates with its rugged landscapes, serene monasteries, and vibrant cultural heritage.' },
//     { src: "/destinations/destinations-TimesSquare.jpg", text: "Times Square", p: 'Times Square is a vibrant commercial and entertainment hub in New York City, renowned for its bright lights, Broadway theaters, and bustling atmosphere.' },
// ];

// export default function Destinations() {
//     const swiperRef = useRef(null);

//     return (
//         <div className="destinations-section border-blue-700 relative mx-auto mt-12">
//             <h2 className="heading-h text-center text-4xl font-extrabold text-blue-300">
//                 Explore Top Destinations
//             </h2>
//             <p className="heading-p text-center text-gray-300">
//                 Explore your dream places around the world. Here you can find your perfect destination.
//             </p>

//             <div className="collection">
//                 <Swiper
//                     modules={[Navigation]}
//                     navigation={{
//                         nextEl: '.swiper-button-next',
//                         prevEl: '.swiper-button-prev',
//                     }}
//                     loop={true}
//                     className="mySwiper flex justify-center"
//                     slidesPerView={5}
//                     spaceBetween={10}
//                     onInit={(swiper) => {
//                         swiperRef.current = swiper;
//                     }}
//                 >
//                     {images.map((image, index) => (
//                         <SwiperSlide key={index} className="swiper-slide flex justify-center items-center">
//                             <div className="relative group">
//                                 <img 
//                                     src={image.src} 
//                                     alt={image.text} 
//                                     className="mx-auto h-auto transition-all duration-300 ease-in-out group-hover:blur-sm" 
//                                 />
//                                 {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                     <h3 className="text-white text-2xl font-bold">{image.text.toUpperCase()}</h3>
//                                     <p className="text-gray-300">{image.p}</p>
//                                     <button className="bg-white text-red-500 rounded px-4 py-2 mt-2">Read more</button>
//                                 </div> */}
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//                 <FontAwesomeIcon
//                     icon={faAngleLeft}
//                     className="absolute left-10 text-5xl cursor-pointer text-white/80 hover:text-white z-10"
//                     onClick={() => swiperRef.current.swiper.slidePrev()} 
//                 />
//                 <FontAwesomeIcon
//                     icon={faAngleRight}
//                     className="absolute right-10 text-5xl cursor-pointer text-white/80 hover:text-white z-10"
//                     onClick={() => swiperRef.current.swiper.slideNext()} 
//                 />
//             </div>
//         </div>
//     );
// }


