import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

function buttonClick() {
    console.log('Close button has been clicked');
};

function notificationRender ( item, markAsRead ) {
    if (item.length > 0) {
        return (item.map((x => {
            return(
                <NotificationItem key={x.id} html={x.html} type={x.type} value={x.value} id={x.id}markAsRead={markAsRead}/>
            );
        })));
    } else {
        return ("No new notifications for now");
    }
}

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        /* this.state = {
            
        }; */
        this.markAsRead = this.markAsRead.bind(this);

        
    }
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render () {
        return (
            <>
                <div id="notifications-container">
                    <div className="menuItem">Your notifications</div>
                    <div style={{ display: (this.props.displayDrawer ? 'flex' : 'none') }} className="Notifications">
                        <div>
                            {(this.props.listNotifications.length > 0 ? <p>Here is the list of notifications</p> : "")}
                            <ul>
                                {notificationRender(this.props.listNotifications, this.markAsRead)}
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
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}

export default Notifications;