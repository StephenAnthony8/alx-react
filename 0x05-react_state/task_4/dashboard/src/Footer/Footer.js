import './Footer.css';
import { getFooterCopy, getFullYear } from "../utils/utils";
import { useContext } from 'react';
import AppContext from '../App/AppContext';

function Footer() {
  const changes = useContext(AppContext);
  return (
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      {changes.user.isLoggedIn ? <p><a href='#'>Contact us</a></p> : null}
    </div>
  )
};

export default Footer;