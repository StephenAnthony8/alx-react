import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({type='default', html, value}) {
  let htmlContent;
  if (html) {
    return (
    <li dangerouslySetInnerHTML={html} />
    );
  } else if (type && value) {
    return (
    <li data-notification-type={type}>
      {value}
    </li>
    );
  } else {
    return(
      <li></li>
    )
  }
}

NotificationItem.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  html: PropTypes.exact({
    __html: PropTypes.string.isRequired
  })
}

export default NotificationItem;