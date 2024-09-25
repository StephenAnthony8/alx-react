import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    let notificationRender;
    if (this.props.html) {
      notificationRender = <li onClick={() => {this.props.markAsRead(this.props.id)}} data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} />;
    } else if (this.props.value) {
      notificationRender = <li onClick={() => {this.props.markAsRead(this.props.id)}} data-notification-type={this.props.type}>{this.props.value}</li>;
    } else {
      notificationRender = <li data-notification-type={this.props.type}></li>
    }
    return (
      notificationRender
    );
  }
}


NotificationItem.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.number,
  html: PropTypes.exact({
    __html: PropTypes.string.isRequired
  }),
  markAsRead: PropTypes.func
}

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {}
}

export default NotificationItem;