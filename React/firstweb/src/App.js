import logo from './logo.svg';
import './App.css';
import './index.css'
import {Header} from './Header';
import  Footer from './Footer';
import {Button,Card,Container,Row,Col} from 'react-bootstrap';
import { blog } from './Data/blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import Header2 from './Header2';
import log from './WhatsApp Image .jpg'
function App() {
  // let name="Wscubetech";
  // let l=[10,20,30,40];
  // let status=true;
   return (
    <div className="App">
      <h1 className='text-[40px] text-red-900 font-bold' >Welcome to WS</h1>
      {/* Call header */}

      <img width={200} src={log} />
      <Header2/>


      <Header email="Wscube@gmail.com">
        <h1>Welcome to Header section</h1> {/* children*/ }
        <FontAwesomeIcon icon={faWhatsapp} className='text-danger'/>
        <FontAwesomeIcon icon={faPhone} className='text-danger'/>
        <FontAwesomeIcon icon={faSearch} />
      </Header>
      <div className='container'>
          <h1 className='text-danger'> Welcome to Home page</h1>
      </div>
     
      {/* <Container fluid>
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
      </Container> */}


// how to pass object to child components
      <Container>
           <Row>
            {blog.map((v,i)=>{
              return(
                 <Productitems pitems={v} key={i}/>
              )
            })}
            {/* <Productitems/> */}
           </Row>
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

// how to pass object to child components
function Productitems({pitems}){
    return(
        <div className="col-lg-3 mb-4" >
           <Card >
                    
                    <Card.Body>
                      <Card.Title>
                        {pitems.title}
                      </Card.Title>
                      <Card.Text>
                       {pitems.body}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
        </div>
    )
}




// function Card(){
//   return(
//     <div className='carditems'>card Div</div>
//   )
// }