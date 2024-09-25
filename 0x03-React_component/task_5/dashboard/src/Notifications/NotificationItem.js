import React, { memo } from 'react';
import PropTypes, { func } from 'prop-types';

/* class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  };

  shouldComponentUpdate(nextProps) {
    return (nextProps !== props);
  }
  
} */
  const NotificationItem = memo(function NotificationItem ({ html, id, type='default', value, markAsRead = () => {} }) {
    let notificationRender;
    if (html) {
      notificationRender = <li onClick={() => {markAsRead(id)}} data-notification-type={type} dangerouslySetInnerHTML={html} />;
    } else if (value) {
      notificationRender = <li onClick={() => {markAsRead(id)}} data-notification-type={type}>{value}</li>;
    } else {
      notificationRender = <li data-notification-type={type}></li>
    }
    return (
      notificationRender
    );
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