import { React } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

function buttonClick() {
    console.log('Close button has been clicked');
};

function Notifications({ displayDrawer = false, listNotifications = [] }) {
    const renderNotification = (
        listNotifications.length > 0 ?
            listNotifications.map((x) => {
                return (
                    <NotificationItem key={x.id} html={x.html} type={x.type} value={x.value} />
                )
            }) :
            "No new notifications for now"
    );
    return (
        <>
            <div id="notifications-container">
                <div className="menuItem">Your notifications</div>
                <div style={{ display: (displayDrawer ? 'flex' : 'none') }} className="Notifications">
                    <div>
                        {(listNotifications.length > 0 ? <p>Here is the list of notifications</p> : "")}
                        <ul>
                            {renderNotification}
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
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;