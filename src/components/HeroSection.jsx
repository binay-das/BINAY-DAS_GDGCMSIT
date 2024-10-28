import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import hero1 from "/hero/hero1.avif";
import hero2 from "/hero/hero2.jpg";

import story1 from "/story/story.jpg";
import story2 from "/story/play.png";


export default function HeroSection() {
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="hero-section grid grid-cols-2 min-h-screen mx=auto">
            <div className="left">
                <img src={hero1} alt="" className="hero-img-1 border-8 rounded-3xl shadow-indigo-50" />
                <img src={hero2} alt="" className="hero-img-2 border-8 rounded-3xl shadow-indigo-50" />
            </div>
            <div className="right flex flex-col text-center gap-4">
                <h1 className="text-5xl font-extrabold text-right flex flex-col gap-3 mr-16">
                    <p>Find Your Perfect</p>
                    <p>Getaway</p>
                    <p>Discover the </p>
                    <p>World's Best Kept</p>
                    <TypeAnimation
                        sequence={['Secrets', 2000, 'Wonders', 2000, 'Gems', 2000]}
                        wrapper='span'
                        style={{ color: '#red' }}
                        repeat={Infinity}
                        className='type-animation'
                    />
                </h1>
                <p>Make your travel more enjoyable with us. We are the best travel agency and we are providing the best travel services for our clients</p>
                <div className="action-btns flex justify-center items-center gap-1">
                    <button class="hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Membership
                    </button>
                    <button class="hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Plan a Trip
                    </button>
                    <button class="hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Book Now
                    </button>
                </div>
                <div className="story rounded-full mx-auto">
                    <img className='story-1' src={story1} alt="" srcset="" />

                    <div className="play relative">
                        <img className='story-2' src={story2} alt="" />
                    </div>
                </div>

                <h5
                    className={`font-semibold text-[#5755b6] transition-all duration-[1000ms] delay-[500ms] transform ${
                        isScrolled
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4'
                    }`}
                >
                    Watch our story
                </h5>
            </div>
        </div>
    );
}