import { React } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function buttonClick() {
    console.log('Close button has been clicked');
};

function Notifications({ displayDrawer = false }) {
    return (
        <>
            <div id="notifications-container">
                <div className="menuItem">Your notifications</div>
                <div style={{ display: (displayDrawer ? 'inherit' : 'none') }} className="Notifications">
                    <div>
                        <p>Here is the list of notifications</p>
                        <ul>
                            <NotificationItem type={'default'} value={'New course available'} />
                            <NotificationItem type={'urgent'} value={'New resume available'} />
                            <NotificationItem html={{ __html: getLatestNotification() }} />
                        </ul>
                    </div>
                    <button style={{ width: 'fit-content', height: 'fit-content', backgroundColor: 'transparent', border: 'transparent' }} aria-label='Close' onClick={buttonClick}>
                        <img style={{ width: 10, height: 10 }} src={closeIcon} alt="close-icon" />
                    </button>
                </div>
            </div>
        </>
    )
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool
};

export default Notifications;