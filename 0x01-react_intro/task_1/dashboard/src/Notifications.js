import React from 'react';
import './Notifications.css';

/**
 * NotificationsElement - Returns a div with a paragraph filled with text
 * Return: div with paragraph
 */

function handleXClick() {
    console.log('Close button has been clicked');
}
export default function NotificationsElement() {
  return (
    <div className="Notifications">
        <p>Here is the list of notifications</p>
         <button aria-label='Close' onClick={handleXClick}></button>
    </div>
  );
}