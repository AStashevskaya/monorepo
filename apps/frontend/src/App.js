import logo from './logo.svg';
import './App.css';
import { getSiteInfo } from "site-info";

function App() {
  let siteInfo = getSiteInfo(); //Define a variable to get the values

  console.log('site', siteInfo)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> {siteInfo.title}</h1>
        <h3>{siteInfo.subtitle}</h3>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
