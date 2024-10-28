
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function FAQ() {

    const [activeQuestion, setActiveQuestion] = useState(null);
    const questions = [
        {
            id: 1,
            question: 'How do I book my travel arrangements through your website?',
            answer: 'Booking your travel with us is simple and convenient. Start by entering your destination, travel dates, and other relevant details on our homepage. Browse through the available options, including flights, hotels, and car rentals. Once you find the perfect combination for your trip, follow the easy step-by-step process to confirm your booking. If you encounter any issues or have questions during the booking process, our customer support team is available 24/7 to assist you.'
        },
        {
            id: 2,
            question: 'What measures are in place to ensure the safety of my personal information?',
            answer: 'We take the security of your personal information seriously. Our website employs state-of-the-art encryption technology to safeguard your data during the booking process. Additionally, we adhere to strict privacy policies and comply with industry standards to protect your information. Rest assured that your details are used solely for the purpose of facilitating your travel arrangements, and we do not share your information with third parties without your consent. For more details, please refer to our Privacy Policy.'
        },
        {
            id: 3,
            question: 'Can I make changes to my booking or cancel it if needed?',
            answer: 'Yes, we understand that plans can change. Depending on the terms and conditions of your specific booking, you may be able to make modifications or cancel your reservation. Log in to your account on our website, navigate to the "Manage Booking" section, and follow the provided instructions. Keep in mind that there may be associated fees or restrictions depending on the type of booking and the time of the requested changes. For further assistance, feel free to contact our customer support team, and they will guide you through the process.'
        }
    ];

    return (
        <div className="faq-section flex flex-col justify-center items-center m-auto">
            <h1 className="events-section-h">Frequently asked questions</h1>


            <div className='flex flex-col justify-center items-center'>
                {questions.map((question) => (
                    <div key={question.id} className='last:mb-0 w-[900px]'>
                        <div className='accordian-item w-[full] mx-auto flex flex-col justify-center items-center focus:outline-none p-4 pl-10 rounded-lg'>
                            <button className='w-full text-left text-[18px] font-bold focus:outline-none flex justify-between items-center ' onClick={() => setActiveQuestion(activeQuestion === question.id ? null : question.id)}>
                                <h1 className='accordian-item-h w-[full] mx-auto hover:scale-110'>{question.question}</h1>
                                {activeQuestion === question.id ? <FontAwesomeIcon icon={faMinus} className='plus-minus-icon' /> : <FontAwesomeIcon icon={faPlus} className='plus-minus-icon' />}
                            </button>
                            <AnimatePresence>
                                {activeQuestion === question.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className='mt-16 mb-10 text-[16px] text-center font-semibold'
                                    >
                                        <p>{question.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}