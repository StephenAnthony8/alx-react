import './App.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import holbertonLogo from "../assets/holberton-logo.jpg"

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={holbertonLogo} alt="holberton-logo" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" name="password" />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
      
    </div>
  );
}

export default App;
