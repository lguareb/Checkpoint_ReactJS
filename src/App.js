
import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import product from "./product.json";
import Name from "./components/Name";
import Client from "./components/Client";
import Description from "./components/Description";

function App() {
  return (
    <div className="App">
      {/* REACT FRAGMENT for Navigation bar */}
      <>
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
          <Container>
            <Navbar.Brand href="#home" style={{color: 'teal'}}>TravelExpert</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about-us">About us</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>

      {/* REACT FRAGMENT for Page Header*/}
      <>
        <div style={{ textAlign: "center", padding: '0.6em', backgroundColor: "lightgray"}}>
          <h3 style={{color: 'teal', lineHeight : 3}}>Your partner for dream vacation</h3>
          <p><b>TravelExpert</b> has a global network of the best adventure travel operators and travel specialists. Book fully-packaged tours with leading operators in the industry, or seek start to finish travel assistance from the industry's leading travel agents. Both entities focus on delivering the best natural, cultural and adventure itineraries on the market.</p>
        </div>
      </>

    {/* CARD FOR PRODUCT.JSON */}
    <div style={{className:"jsonCard" ,display: "flex", flexDirection: 'column', alignItems : "center", padding: '0.6em', backgroundColor: "lightgray"}}>
      <Card style={{display: "flex", alignItems: "center" , width: '38rem', flexDirection: 'row'}}>
        <Card.Img variant="top" src={product.image} style={{ width: '35%', borderRadius: 10, marginLeft:'3%'}} />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <Client />
          </Card.Subtitle>
          <Card.Text>
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>


    {/* CARDGROUP FOR INLINE DIPLAY */}
      <CardGroup>
        <Card style={{ width: '18rem' }}>
          <Card.Header>Climb...</Card.Header>
          <Card.Img variant="top" src="https://mdbcdn.b-cdn.net/img/new/standard/nature/190.webp" />
          <Card.Body>
            <Card.Title>Rock-Climb</Card.Title>
            <Card.Text>
              You dream of rock climbing adventures on an exotic destination? Stand on the precipice of a great experience, where nature offers the rambler an infinity of panorama!
            </Card.Text>
            <Button variant="primary">Discover</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Header>Hike...</Card.Header>
          <Card.Img variant="top" src="https://mdbcdn.b-cdn.net/img/new/standard/nature/164.webp" />
          <Card.Body>
            <Card.Title>Be a modern Hiking Adventurer</Card.Title>
            <Card.Text>
              Get prepared to discover exceptional hiking trails, while discovering picturesque vineyard village paths, or through wild forest with breath taking landscape.
            </Card.Text>
            <Button variant="primary">Discover</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Header> Dive and Chill!</Card.Header>
          <Card.Img variant="top" src="https://mdbcdn.b-cdn.net/img/new/standard/nature/199.webp" />
          <Card.Body>
            <Card.Title>Ride the tide</Card.Title>
            <Card.Text>
              Come to try diving through stunning coral reefs, enchanting sunken ships and other gorgeous marine environments, all while enjoying white sand beaches.
            </Card.Text>
            <Button variant="primary">Discover</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default App;
