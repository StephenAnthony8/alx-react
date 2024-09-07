import { React } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function buttonClick() {
    console.log('Close button has been clicked');
};

function Notifications() {
    return(
        <div className="Notifications">
            <div>
                <p>Here is the list of notifications</p>
                <ul>
                    <NotificationItem type={'default'} value={'New course available'}/>
                    <NotificationItem type={'urgent'} value={'New resume available'}/>
                    <NotificationItem html={{__html: getLatestNotification()}}/>
                </ul>
            </div>
            <button style={{width: 'fit-content', height: 'fit-content' }} aria-label='Close' onClick={buttonClick}>
                <img style={{ width: 10, height: 10 }} src={closeIcon} alt="close-icon" />
            </button>
        </div>
    )
}

export default Notifications;