import { faGithub, faInstagram, faLinkedin, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLink, faPhone, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="footer w-full">
            <div className="footer-container w-full flex flex-wrap justify-between gap-[20px] ">
                <div className="footer-col">
                    <h3 className="footer-head">Tourguide</h3>
                    <p className="font-semibold mb-4">Ready for your next adventure? Let's make it unforgettable.
                        <br />
                    </p>
                    <p className="footer-text font-semibold">Start planning your dream trip with us and explore the world.</p>
                </div>
                <div className="footer-col">
                    <h3 className="footer-head">Places You May Want to Visit</h3>
                    <p className="footer-text font-semibold">
                        <a href="#">Cultural Experiences</a>
                        <a href="#">Honeymoon Places</a>
                        <a href="#">Adventure travel</a>
                    </p>
                </div>
                <div className="footer-col">
                    <h3 className="footer-head">Support</h3>
                    <p className="footer-text text-[18px] font-semibold support">
                        <a href="#">Our Blogs</a>
                        <a href="#">FAQs</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Licensing</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Our Contributors</a>
                    </p>
                </div>
                <div className="footer-col">
                    <h3 className="footer-head pl-[35px] address">Address</h3>
                    <div className="map relative text-right h-[200px] w-[200px]">
                        <div className="canvas">
                            <img src="/footer/map.png" alt="" className="w-[200px] h-[200px] rounded-xl" />
                        </div>
                    </div>
                </div>
                <div className="footer-col font-semibold text-[18px]">
                    <h3 className="footer-head pl-[35px]">Contact Us</h3>
                    <div className="contact-1 flex items-center">
                        <FontAwesomeIcon icon={faLink} className="text-blue-900 mr-2" />
                        <p>tour@tourguide.com</p>
                    </div>
                    <div className="contact-2 flex items-center mt-2">
                        <FontAwesomeIcon icon={faPhone} className="text-blue-900 mr-2" />
                        <p>+91 XXXXXXXXXX</p>
                    </div>
                    <div className="icons w-[full] flex justify-between px-1 my-4 text-2xl">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faXTwitter} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faYoutube} />
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <img src="/footer/footer-stat.svg" alt="" />
                </div>
                <div className="language p-[32px] flex flex-col justify-center items-center">
                    <h5 className="footer-head block mb-[8px] font-black">Select Language: </h5>
                    
                    <div className="language-box-1">
                        <div className="language-box-2">
                            <select name="" id="language" className="py-[4px] select text-black w-full">
                                <option value="">Select language</option>
                                <option value="bn">Bangla</option>
                                <option value="hi">Hindi</option>
                                <option value="en">English</option>
                                <option value="es">Spanish</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                                <option value="ru">Russian</option>
                                <option value="ja">Japanese</option>
                                <option value="zh">Chinese</option>
                                <option value="ko">Korean</option>
                                <option value="it">Italian</option>
                                <option value="pt">Portuguese</option>
                                <option value="tr">Turkish</option>
                                <option value="vi">Vietnamese</option>
                                <option value="id">Indonesian</option>
                                <option value="th">Thai</option>

                            </select>
                            <div className="flex flex-col justify-center items-center w-full">
                                <span>Powered by</span>
                                <img src="/footer/google.png" alt="google_logo" height={'90%'} />
                                <span className="font-extrabold text-black">Translate</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer-bar">
                <div className="font-semibold">
                    Copyright &copy; 2024 All rights reserved
                </div>
            </div>

        </footer>
    );
}