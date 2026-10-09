import logo from './logo.svg';
import './App.css';
import {Header} from './Header';
import  Footer from './Footer';

function App() {
  // let name="Wscubetech";
  // let l=[10,20,30,40];
  // let status=true;
   return (
    <div className="main">
      {/* Call header */}
      <Header/>
      <div className='row'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      
      <Footer/>


        {/* <h1>{name} </h1>
        {l.map((v)=>{
           return(
            <div>{v}</div>
           )
        })}


        <div> {10+20}</div>
        { (status) ? 
         <h1 style={{color:"red"}}>Welcome to WS</h1>: ""
        } */}


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

function Card(){
  return(
    <div className='carditems'>card Div</div>
  )
}