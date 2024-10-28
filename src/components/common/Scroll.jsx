import { faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Scroll() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            {showScroll && (
                <div
                    className="up-btn fixed bottom-5 left-5 w-[50px] h-[50px] bg-[#002152] 
            rounded-full shadow-lg text-white text-[22px] 
            flex justify-center items-center cursor-pointer 
            transition-all duration-500 hover:bg-[#004080] 
            hover:scale-110 hover:shadow-[0_0_5px_rgba(0,0,0,0.5),_0_0_25px_black,_0_0_50px_black,_0_0_200px_black] 
            hover:text-red-600"
                    onClick={scrollToTop}
                >
                    <FontAwesomeIcon icon={faUpLong} />
                </div>
            )}
        </div>
    );
}