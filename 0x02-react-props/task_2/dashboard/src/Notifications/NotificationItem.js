import React from 'react';

function NotificationItem({type, html, value}) {
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

export default NotificationItem;