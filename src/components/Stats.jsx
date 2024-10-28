import { faHandshakeAngle, faLocationDot, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Stats() {
    return (
        <div className="stats-section flex gap-4 m-auto">
            <div className="stat-item flex flex-col justify-around items-center">
                <FontAwesomeIcon icon={faHandshakeAngle} id='stat-icon'/>
                <h1 id='stat-number'>25000</h1>
                <h1 id='stat-type'>Guides</h1>
            </div>
            <div className="stat-item flex flex-col justify-around items-center">
                <FontAwesomeIcon icon={faSuitcaseRolling} id='stat-icon'/>
                <h1 id='stat-number'>20000</h1>
                <h1 id='stat-type'>Tours</h1>
            </div>
            <div className="stat-item flex flex-col justify-around items-center">
                <FontAwesomeIcon icon={faLocationDot} id='stat-icon'/>
                <h1 id='stat-number'>20000</h1>
                <h1 id='stat-type'>Destinations</h1>
            </div>
        </div>
    );
}