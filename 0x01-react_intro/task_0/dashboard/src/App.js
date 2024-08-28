import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="Holberton-logo" src={require("./holberton-logo.jpg")} alt="" />
        <h1>School dashboard</h1>

      </header>
      <main className="App-body">
        <p>Login to access to the full dashboard</p>
      </main>
      <footer className="App-footer">
        <p>Copyright 2020-holberton School</p>
      </footer>
    </div>
  );
}

export default App;
