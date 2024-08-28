import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <header className="App-header">
        <img className="Holberton-logo" src={require("./holberton-logo.jpg")} alt="" />
        <h1>School dashboard</h1>
      </header>

      {/* Main */}
      <main className="App-body">
        <p>Login to access to the full dashboard</p>
        {/* input form */}
        <label htmlFor="email">Email:&nbsp;</label>
        <input type="text" id='email' name='email' />
        <label htmlFor="pword">&nbsp;Password:&nbsp;</label>
        <input type="text" id='pword' name='pword' />&nbsp;
        <input type="submit" value="OK" />
      </main>

      {/* Footer */}
      <footer className="App-footer">
        <p>Copyright {getFullYear()}-{getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default App;
