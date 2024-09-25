/* import { getLatestNotification } from '../utils/utils'; */
import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { css, StyleSheet } from 'aphrodite';


class Notifications extends React.PureComponent {
    constructor(props) {
        super(props);
        /* this.markAsRead = this.markAsRead.bind(this); */
        this.notificationRender = this.notificationRender.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
    }

    notificationRender(item, markAsRead) {

        if (item.length > 0) {
            return (item.map((x => {
                return (
                    <NotificationItem
                        key={x.id}
                        html={x.html}
                        type={x.type}
                        value={x.value}
                        id={x.id}
                        markNotificationAsRead={this.props.markNotificationAsRead}
                    />
                );
            })));
        } else {
            return ("No new notifications for now");
        }
    }

    /* markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    } */


    buttonClick() {
        console.log('Close button has been clicked');
    };

    /* shouldComponentUpdate(nextProps) {
        return (nextProps !== this.props);
    } */

    render() {
        const divRender = (this.props.displayDrawer ? 'flex' : 'none');
        const renderDiv = (this.props.displayDrawer ? 'none' : 'inherit');
        const divWidth = '100%';
        return (
            <>
                <div id="notifications-container" className={css(styles['notifications-container'])}>
                    <div onClick={this.props.handleDisplayDrawer} className={`menuItem ${css(styles.menuItem)}`} style={{ display: renderDiv }}>Your notifications</div>
                    <div style={{ display: divRender }} className={`Notifications ${css(styles.Notifications)}`}>
                        <div style={{ width: divWidth }}>
                            {(this.props.listNotifications.length > 0 ? <p>Here is the list of notifications</p> : "")}
                            <ul className={css(styles.ul)}>
                                {this.notificationRender(this.props.listNotifications)}
                            </ul>
                        </div>
                        <button style={{ width: 'fit-content', height: 'fit-content', backgroundColor: 'transparent', border: 'transparent', position: 'absolute', right: '0' }} aria-label='Close' onClick={this.props.handleHideDrawer}>
                            <img style={{ width: '20px', height: '20px' }} src={closeIcon} alt="close-icon" />
                        </button>
                    </div>
                </div>
            </>
        )

    }
}


const styles = StyleSheet.create({



    'ul': {
        '@media (max-width: 900px)': {
            'list-style-type': 'none',
            'margin': '0',
            'padding': '0',
            width: '100%'
        }
    },

    'notifications-container': {
        'position': 'absolute',
        'right': '0',
        'margin': '0.5em',
        'z-index': '10',
        'font-weight': '700',
        'background-color': 'white',
        '@media (max-width: 900px)': {
            margin: '0',
            padding: '0',
            width: '100%',

        }
    },
    /* Notifications class */
    'Notifications': {
        position: 'relative',
        'border': 'dotted #f41c43 2px',
        'padding': '0.5em 0.5em 0 0.5em',
        'flex-direction': 'row',
        'justify-content': 'space-between',
        'margin': '3px',
        '@media (max-width: 900px)': {
            border: 'none',
            height: '100vh',
        }
    },

    /* menuitem */
    menuItem: {
        'text-align': 'right'
    }
});



Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    handleHideDrawer: PropTypes.func,
    handleDisplayDrawer: PropTypes.func,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    markNotificationAsRead: PropTypes.func
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => { },
    handleHideDrawer: () => { }
}

export default Notifications;