import React from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { css, StyleSheet } from 'aphrodite';

function buttonClick() {
    console.log('Close button has been clicked');
};

function notificationRender ( item, markAsRead ) {
    if (item.length > 0) {
        return (item.map((x => {
            return(
                <NotificationItem key={x.id} html={x.html} type={x.type} value={x.value} id={x.id} markAsRead={markAsRead}/>
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

    shouldComponentUpdate(NextProps) {
        return (NextProps.listNotifications !== this.props.listNotifications);
    }

    render () {
        return (
            <>
                <div id="notifications-container" className={css(styles['notifications-container'])}>
                    <div className={`menuItem ${css(styles.menuItem)}`}>Your notifications</div>
                    <div style={{ display: (this.props.displayDrawer ? 'flex' : 'none') }} className={`Notifications ${css(styles.Notifications)}`}>
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

const styles = StyleSheet.create({
    'notifications-container': {
        'position': 'absolute',
        'right': '0',
        'margin': '0.5em',
        'z-index': '10',
        'font-weight': '700',
        'background-color': 'white',
    },
    /* Notifications class */
    'Notifications': {
        /* 'display': 'flex', */
        'border': 'dotted #f41c43 2px',
        'padding': '0.5em 0.5em 0 0.5em',
        'flex-direction': 'row',
        'justify-content': 'space-between',
        'margin': '3px',
    },
    
    /* menuitem */
    menuItem: {
        'text-align': 'right'
    }
});

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}

export default Notifications;