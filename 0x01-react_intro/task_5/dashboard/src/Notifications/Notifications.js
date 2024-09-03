import { React } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

function buttonClick() {
    console.log('Close button has been clicked');
};

export default function Notifications() {
    return(
        <div className="Notifications">
            <div>
                <p>Here is the list of notifications</p>
                <ul>
                    <li id="default-priority">New course available</li>
                    <li id="urgent-priority">New resume available</li>
                    <li id="urgent-priority"><div dangerouslySetInnerHTML={{__html: getLatestNotification() }}/></li>
                </ul>
            </div>
            <button style={{width: 'fit-content', height: 'fit-content' }} aria-label='Close' onClick={buttonClick}>
                <img style={{ width: 10, height: 10 }} src={closeIcon} alt="close-icon" />
            </button>
        </div>
    )
}
