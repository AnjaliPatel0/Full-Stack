import logo from './logo.svg';
import './App.css';

function App() {
  let name="Wscubetech";
  let l=[10,20,30,40];
  return (
    <div className="App">
        <h1>{name} </h1>
        {l.map((v)=>{
           return(
            <div>{v}</div>
           )
        })}
      {/* <h1> Welcome to Jungle </h1> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
