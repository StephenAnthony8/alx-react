import React from 'react';
import './Notifications.css';
import './close-icon.png';
import { getLatestNotification } from './utils';

/**
 * NotificationsElement - Returns a div with a paragraph filled with text
 * Return: div with paragraph
 */

function handleXClick() {
    console.log('Close button has been clicked');
}

/* function dangerouslySetInnerHTML() {
  return (getLatestNotification());
} */
export default function NotificationsElement() {
  return (
    <div className="Notifications">
      <div>
        <p>Here is the list of notifications</p>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
        </ul>
      </div>
          
         <button aria-label='Close' onClick={handleXClick}>
          <img src={require("./close-icon.png")} alt="" />
         </button>
    </div>
  );
}