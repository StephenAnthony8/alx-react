import React, { memo } from 'react';
import PropTypes, { func } from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

/* class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  };

  shouldComponentUpdate(nextProps) {
    return (nextProps !== props);
  }
  
} */
const NotificationItem = memo(function NotificationItem({ html, id, type = 'default', value, markAsRead = () => { } }) {
  let notificationRender;
  if (html) {
    notificationRender = <li onClick={() => { markAsRead(id) }} data-notification-type={type} dangerouslySetInnerHTML={html} className={css(styles.urgent, styles.li)} />;
  } else if (value) {
    notificationRender = <li onClick={() => { markAsRead(id) }} data-notification-type={type} className={type === 'urgent' ? css(styles.urgent, styles.li) : css(styles.default, styles.li)}>{value}</li>;
  } else {
    notificationRender = <li data-notification-type={type}></li>
  }
  return (
    notificationRender
  );
});

const styles = StyleSheet.create({
  'li': {
    '@media (max-width: 900px)': {
      'border-bottom': "solid black 2px",
      'padding': '10px 8px',
      'font-size': '20px',
      width: '100%'
    }
  },
  "default": {
    color: '#260160'
  },

  "urgent": {
    color: '#ff2222'
  },
});

NotificationItem.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.number,
  html: PropTypes.exact({
    __html: PropTypes.string.isRequired
  }),
  markAsRead: PropTypes.func
}
/* 
NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {}
}
 */
export default NotificationItem;