import logo from './logo.svg';
import './App.css';
import {Header} from './Header';
import  Footer from './Footer';
import {Button,Card,Container,Row,Col} from 'react-bootstrap';

function App() {
  // let name="Wscubetech";
  // let l=[10,20,30,40];
  // let status=true;
   return (
    <div className="main">
      {/* Call header */}
      <Header/>
      <div className='container'>
          <h1 className='text-danger'> Welcome to Home page</h1>
      </div>
     
      <Container fluid>
        <Container>
          <Row>
            <Col className='col-12 text-center py-4'>
               <h1> Our Courses</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                    
                    <Card.Body>
                      <Card.Title>Course1</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
            </Col>
            <Col lg="3" md="6">
                <Card style={{ width: '18rem' }}>
                    
                    <Card.Body>
                      <Card.Title>Course1</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
            </Col>
            <Col lg="3" md="6">
                 <Card style={{ width: '18rem' }}>
                    
                    <Card.Body>
                      <Card.Title>Course1</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
            </Col>
            <Col lg="3" md="6">
                 <Card style={{ width: '18rem' }}>
                    
                    <Card.Body>
                      <Card.Title>Course1</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
            </Col>
          </Row>
        </Container>
      </Container>
     
      {/* <div className='row'>
       
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div> */}
      
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

// function Card(){
//   return(
//     <div className='carditems'>card Div</div>
//   )
// }