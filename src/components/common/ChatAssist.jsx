import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ChatAssist () {
    return(
        <div className="chat-btn flex justify-center items-center fixed bottom-10 right-5 p-3 rounded-full cursor-pointer w-[52px] h-[52px] bg-[#121e8a] shadow-lg text-center text-white 
        text-[22px] hover:bg-[var(--bubble-widget-background-color)]">
            <FontAwesomeIcon icon={faCommentDots} />
        </div>
    );
}