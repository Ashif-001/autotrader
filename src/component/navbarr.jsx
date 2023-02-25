import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./images/logo.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NoPage from '../Nopage';

// Routing
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Sign from '../component2/Sign';
import Body from './body';
import Footer from './footer';
import Create from '../component2/Create';
import Home from '../Home';
import Main from '../carsbrand/main';
// import Audi from '../carsbrand/audi-detail';
import Audi from "../carsbrand/AUDI/Audi"
import BMW from '../carsbrand/Bmw/bmw';
import Used_cars from '../component2/used_cars/used_cars';
import NewCar from '../component2/new_cars/new_cars';


function Header() {

  return (
  <Router>
    <Navbar className='bg' variant="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Container>
          <Row className='pp' xs="auto">
            <Col className='top-nav'><a href='/Cars'>Cars</a></Col>
            <Col className='top-nav'><a href="/Vans">Vans</a></Col>
            <Col className='top-nav'><a href="/Bikes">Bikes</a></Col>
            <Col className='top-nav'><a href="/Motorhomes">Motorhomes</a></Col>
            <Col className='top-nav'><a href="/caravans">Caravans</a></Col>
            <Col className='top-nav'><a href="/Truck">Trucks</a></Col>
            <Col className='top-nav'><a href="/farms">Farms</a></Col>
            <Col className='top-nav'><a href="/plant">Plant</a></Col>

          </Row>



          <Navbar.Brand href='/' ><img className='logo' src={logo} /></Navbar.Brand>


          <Nav className="me-auto">
            <Nav.Link className='a' href="/used_cars">Used cars</Nav.Link>
            <Nav.Link className='a' href="/new_cars">New cars</Nav.Link>
            <Nav.Link className='a' href="#sell your car">Sell your car</Nav.Link>
            <Nav.Link className='a' href="#value your car">Value your car</Nav.Link>
            <Nav.Link className='a' href="#car reviews">Car reviews</Nav.Link>
            <Nav.Link className='a' href="#car leasing">Car leasing</Nav.Link>
            <Nav.Link className='a' href="#electric cars">Electric cars</Nav.Link>
            <Nav.Link className='a' href="#buy a car online">Buy a car online</Nav.Link>

          </Nav>



        </Container>

      </Navbar.Collapse>
      <Row className='login' xs="auto">
        <Col><a href="/save"  >🤍<br></br>Save</a></Col>
        <Col><Link to="/Sign" >👇🏻<br></br>SignIn</Link></Col>
      </Row>
    </Navbar>
    <hr></hr>


    <Routes>
      <Route path="/Sign" element={<Sign />} />
      <Route path='/Create' element={<Create />}></Route>
      <Route path='/Audi' element={<Audi />}></Route>
      <Route path='/BMW' element={<BMW />}></Route>
      <Route path='/used_cars' element={<Used_cars />} />
      <Route path="/" element={<Body />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path='/new_cars' element={<NewCar />}></Route>
      <Route path="/*" element={<NoPage />} />
    </Routes>


    <Footer />
  </Router>
  );
}

export default Header;