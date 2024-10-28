import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/top-deals", label: "Top Deals" },
    { href: "/packages", label: "Packages" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/rate-us", label: "Rate Us?" },
    { href: "/contact-us", label: "Contact Us" },
];

export default function NavBar() {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true); 
            } else {
                setIsScrolled(false); 
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        
    }, []);

    return (
        <header
            className={`sticky top-0 mx-auto flex justify-between items-center text-gray-100 overflow-hidden px-4 py-8 tracking-wider ${isScrolled ? "scrolled" : ""}`}
        >
            <div className="logo flex justify-center items-center text-3xl font-bold">
                <img src="/logo.png" alt="" style={{ width: "40px" }} />
                <h1>
                    Tourguide<span className="text-blue-400">.</span>
                </h1>
            </div>

            <nav className="flex justify-center items-center gap-4 font-semibold">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        to={item.href}
                        className="list-items transition ease-in-out delay-100 px-4 py-2 rounded-md hover:text-purple-600 hover:bg-gradient-to-r from-pink-200 via-purple-200 to-purple-300 hover:underline"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            <div className="btns flex items-center gap-8">
                <button className="log-in transition ease-in-out delay-150 hover: border-b-indigo-500 text-white font-base py-2 px-4 rounded-full">
                    LogIn / SignUp
                </button>
                <button onClick={toggleTheme} className="text-3xl w-[25px]">
                    {theme === "light" ? (
                        <FontAwesomeIcon icon={faMoon} />
                    ) : (
                        <FontAwesomeIcon icon={faSun} className="text-yellow-400" />
                    )}
                </button>
            </div>
        </header>
    );
}
