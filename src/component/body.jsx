import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
// import Button from "react-bootstrap/Button";
// import "./styles-main.css"


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';

import road from "./images/road.jpg"

import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import img1 from "./images/audi-logo.jpg"
import img2 from "./images/bmw-logo.jpg"
import img3 from "./images/ford-logo.jpg"
import img4 from "./images/mercedes-logo.jpg"
import give from "./images/give.png"
import tesla from "./images/tesla.png"


import car1 from "./images/1st.jpg";
import car2 from "./images/2nd.jpg";
import car3 from "./images/3rd.jpg";
import car4 from "./images/4th.jpg";
import car5 from "./images/5th.jpg";
import car6 from "./images/6th.jpg";
import car7 from "./images/7th.jpg";
import car8 from "./images/8th.jpg";

import girl from "./images/girl.jpg"

import ev1 from "./images/ev1.png"
import ev2 from "./images/ev2.png"
import ev3 from "./images/ev3.png"
import ev4 from "./images/ev4.png"

import clip1 from "./images/clip1.jpg"
import clip2 from "./images/clip2.png"

import news from "./images/news.jpg"
import best from "./images/best.jpg"
import living from "./images/living.jpg"
import best2 from "./images/best2.jpg"






function Body() {

  const [open, setOpen] = useState(false);


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };



  return (
    <>
      <Card className="search-card" style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>Find your perfect car</Card.Title>
          <Row className="row1">
            <Col><input className="postcode" placeholder="postcode" size="11" ></input></Col>
            <Col>
              <Dropdown className="dropdown" size="12">
                <Dropdown.Toggle variant="transparent" id="dropdown-basic"> National</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row id="row2">
            <Col><Dropdown className="dropdown" >
              <Dropdown.Toggle variant="transparent" id="dropdown-basic"> Make</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown></Col>
            <Col>
              <Dropdown className="dropdown">
                <Dropdown.Toggle variant="transparent" id="dropdown-basic"> Model</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          <Row id="row3">
            <Col><button className="cash" >Cash</button></Col>
            <Col><button className="finance" >Finance</button></Col>
          </Row>

          <Row id="row4">
            <Col><Dropdown className="dropdown" size="12">
              <Dropdown.Toggle variant="transparent" id="dropdown-basic"> Min price</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown></Col>
            <Col>
              <Dropdown className="dropdown" size="12">
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">Max price</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <button className="search-car">Search 442,342 cars</button>
          <button className="reset-btn" href="#">Reset filter</button>
          <button className="more-btn" href="#">More option</button>
        </Card.Body>
      </Card>





      <img className="road-img" src={road} />


      {/* Card */}






      <Card className='card-head' >
        <p className="card-p">Browse by brand</p>

        <Carousel className='caro' responsive={responsive}>

          <a href="/Audi" type="submit" className='card1'><Card.Img className='img' variant="top" src={img1} />
            <Card.Body >
              <Card.Text className='card-txt'>
                AUDI
              </Card.Text>
            </Card.Body></a>

          <a href="/BMW" type="submit" className='card1'><Card.Img className='img' id='img2' variant="top" src={img2} />
            <Card.Body>
              <Card.Text className='card-txt'>
                BMW
              </Card.Text>
            </Card.Body></a>

          <a href="/FORD" type="submit" className='card1'><Card.Img className='img' variant="top" src={img3} />
            <Card.Body >
              <Card.Text className='card-txt'>
                FORD
              </Card.Text>
            </Card.Body></a>

          <a href="/Mercedes" type="submit" className='card1'><Card.Img className='img' variant="top" src={img4} />
            <Card.Body>
              <Card.Text className='card-txt'>
                MERCEDES
              </Card.Text>
            </Card.Body></a>

        </Carousel>


        {/* Collapse button */}

        <Button
          onClick={() => setOpen(!open)}
          aria-controls="collapse-text"
          aria-expanded={open}
          className="collapse-btn"
        >
          <span>+</span><h10>show all brands</h10>
        </Button>
        <Collapse in={open}>
          <div id="collapse-text">
            <Container className='brand-container'>

              <Row>
                <Col><a href="/Abarth" type="submit" className='brand-btn ' >Abarth</a></Col>
                <Col><a href="/alfa-romeo" type="submit" className='brand-btn '>Alfa Romeo</a></Col>
                <Col><a href="/alpine" type="submit" className='brand-btn '>Alpine</a></Col>
                <Col><a href="/aston martin" type="submit" className='brand-btn '>Aston Martin</a></Col>
              </Row>

              <Row>
                <Col><a href="/bently" type="submit" className='brand-btn'>Bently</a></Col>
                <Col><a href="/citroen" type="submit" className='brand-btn'>Citroen</a></Col>
                <Col><a href="/cupra" type="submit" className='brand-btn'>CUPRA</a></Col>
                <Col><a href="/aston martin" type="submit" className='brand-btn'>Aston Martin</a></Col>
              </Row>
              <Row>
                <Col><a href="/DS Automobiles" type="submit" className='brand-btn'>DS Automobiles</a></Col>
                <Col><a href="/Ferrari" type="submit" className='brand-btn'>Ferrrari</a></Col>
                <Col><a href="/fiati" type="submit" className='brand-btn'>FIAT</a></Col>
                <Col><a href="/aston martin" type="submit" className='brand-btn'>Aston Martin</a></Col>
              </Row>
              <Row>
                <Col><a href="/abarth" type="submit" className='brand-btn'>Abarth</a></Col>
                <Col><a href="/alfa romeo" type="submit" className='brand-btn'>Alfa Romeo</a></Col>
                <Col><a href="/alpine" type="submit" className='brand-btn'>Alpine</a></Col>
                <Col><a href="/aston martin" type="submit" className='brand-btn'>Aston Martin</a></Col>
              </Row>

              <Row>
                <Col><a href="/abarth" type="submit" className='brand-btn ' >Abarth</a></Col>
                <Col><a href="/abarth" type="submit" className='brand-btn '>Alfa Romeo</a></Col>
                <Col><a href="/abarth" type="submit" className='brand-btn '>Alpine</a></Col>
                <Col><a href="/abarth" type="submit" className='brand-btn '>Aston Martin</a></Col>
              </Row>

              <Row>
                <Col><a href="/abarth" type="submit" className='brand-btn'>Abarth</a></Col>
                <Col><a href="/abarth" type="submit" className='brand-btn'>Alfa Romeo</a></Col>
                <Col><a href="/abarth" type="submit" className='brand-btn'>Alpine</a></Col>
                <Col><a href="/abarth" type="submit" className='brand-btn'>Aston Martin</a></Col>
              </Row>
              <Row>
                <Col><a href="/abarth" type="submit" className='brand-btn'>Abarth</a></Col>
                <Col><a href="/abarth" type="submit" className='brand-btn'>Alfa Romeo</a></Col>
                <Col><a href="/abarth" type="submit" className='brand-btn'>Alpine</a></Col>
                <Col><a href="/abarth" type="submit" className='brand-btn'>Aston Martin</a></Col>
              </Row>
              <Row>
                <Col><a href="/abarth" type="submit" className='brand-btn'>Abarth</a></Col>
                <Col><a href="/abarth" type="submit" className='brand-btn'>Alfa Romeo</a></Col>
                <Col><a href="/abarth" type="submit" className='brand-btn'>Alpine</a></Col>
                <Col><a href="/abarth" type="submit" className='brand-btn'>Aston Martin</a></Col>
              </Row>

            </Container>
          </div>
        </Collapse>

      </Card>
      <Row className='electro'>
        <Col className='give-col'><img className='give' src={give} /></Col>
        <Col className='mid'>
          <h4>We're giving away an electric car every month!</h4>
          <h7>Enter for FREE for your chance to win a Tesla Model Y worth over £51,000!</h7>
          <br /><button className='mid-btn'>Enter now</button><br />
          <a href="#T&C"><h9>T&Cs Apply</h9></a>
        </Col>
        <Col className='tesla-col'><h1 style={{textAlign:"center",marginTop:"40px",fontSize:"30px",fontWeight:"800"}}>WIN A<br></br>TESLA MODELY</h1><img className='tesla' src={tesla} /></Col>
      </Row>



      {/* Car detail carousel+card */}
      {/*


  */}

      <Card className='car-head' >
        <p>Brand new car models</p>

        <Carousel className='Brand-detail' responsive={responsive}>

          <a href="/#mini-hatch" type="submit" className='card2'><Card.Img className="car" variant="top" src={car1} />
            <Card.Body >
              <Row className="car-detail">
                <Col style={{color:"grey"}}><s>MRRP</s></Col>
                <Col style={{color:"red"}}>Now</Col>
                <Col className="Save">Save</Col>
              </Row>
              <Row className="car-detail">
                <Col style={{color:"grey"}}><s>$24600</s></Col>
                <Col style={{color:"red"}}>$2400</Col>
                <Col >$600</Col>
              </Row>
              <hr></hr>


              <Card.Text style={{textAlign:"left"}} className='car-detail'>
                MINI Hatch 1.5 Cooper Clas...<br></br>
                <a href="#more">learn more</a>
              </Card.Text>

            </Card.Body>
          </a>

          <a href="#mini-hatch" type="submit" className='card2'><Card.Img className="car" variant="top" src={car2} />
            <Card.Body >
              <Row className="car-detail">
                <Col style={{color:"grey"}}><s>MRRP</s></Col>
                <Col style={{color:"red"}}>Now</Col>
                <Col className="Save">Save</Col>
              </Row>
              <Row className="car-detail">
                <Col style={{color:"grey"}}><s>$24600</s></Col>
                <Col style={{color:"red"}}>$2400</Col>
                <Col className="Save">$600</Col>
              </Row>
              <hr></hr>


              <Card.Text className='car-detail'>
                MINI Hatch 1.5 Cooper Clas...<br></br>
                <a href="#more">learn more</a>
              </Card.Text>

            </Card.Body>
          </a>

          <a href="#mini-hatch" type="submit" className='card2'><Card.Img className="car" variant="top" src={car3} />
            <Card.Body >
              <Row className="car-detail">
                <Col style={{color:"grey"}}><s>MRRP</s></Col>
                <Col style={{color:"red"}}>Now</Col>
                <Col className="Save">Save</Col>
              </Row>
              <Row className="car-detail">
                <Col style={{color:"grey"}}><s>$24600</s></Col>
                <Col style={{color:"red"}}>$2400</Col>
                <Col className="Save">$600</Col>
              </Row>
              <hr></hr>


              <Card.Text className='car-detail'>
                MINI Hatch 1.5 Cooper Clas...<br></br>
                <a href="#more">learn more</a>
              </Card.Text>

            </Card.Body>
          </a>

          <a href="#mini-hatch" type="submit" className='card2'><Card.Img className="car" variant="top" src={car4} />
            <Card.Body >
              <Row className="car-detail">
                <Col style={{color:"grey"}}><s>MRRP</s></Col>
                <Col style={{color:"red"}}>Now</Col>
                <Col className="Save">Save</Col>
              </Row>
              <Row className="car-detail">
                <Col style={{color:"grey"}}><s>$24600</s></Col>
                <Col style={{color:"red"}}>$2400</Col>
                <Col className="Save">$600</Col>
              </Row>
              <hr></hr>


              <Card.Text className='car-detail'>
                MINI Hatch 1.5 Cooper Clas...<br></br>
                <a href="#more">learn more</a>
              </Card.Text>

            </Card.Body>
          </a>

          <a href="#mini-hatch" type="submit" className='card2'><Card.Img className="car" variant="top" src={car5} />
            <Card.Body >
              <Row className="car-detail">
                <Col style={{color:"grey"}}><s>MRRP</s></Col>
                <Col style={{color:"red"}}>Now</Col>
                <Col className="Save">Save</Col>
              </Row>
              <Row className="car-detail">
                <Col style={{color:"grey"}}><s>$24600</s></Col>
                <Col style={{color:"red"}}>$2400</Col>
                <Col className="Save">$600</Col>
              </Row>
              <hr></hr>


              <Card.Text className='car-detail'>
                MINI Hatch 1.5 Cooper Clas...<br></br>
                <a href="#more">learn more</a>
              </Card.Text>

            </Card.Body>
          </a>

          <a href="#mini-hatch" type="submit" className='card2'><Card.Img className="car" variant="top" src={car6} />
            <Card.Body >
              <Row className="car-detail">
                <Col style={{color:"grey"}}><s>MRRP</s></Col>
                <Col style={{color:"red"}}>Now</Col>
                <Col className="Save">Save</Col>
              </Row>
              <Row className="car-detail">
                <Col style={{color:"grey"}}><s>$24600</s></Col>
                <Col style={{color:"red"}}>$2400</Col>
                <Col className="Save">$600</Col>
              </Row>
              <hr></hr>


              <Card.Text className='car-detail'>
                MINI Hatch 1.5 Cooper Clas...<br></br>
                <a href="#more">learn more</a>
              </Card.Text>

            </Card.Body>
          </a>

          <a href="#mini-hatch" type="submit" className='card2'><Card.Img className="car" variant="top" src={car7} />
            <Card.Body >
              <Row className="car-detail">
                <Col style={{color:"grey"}}><s>MRRP</s></Col>
                <Col style={{color:"red"}}>Now</Col>
                <Col className="Save">Save</Col>
              </Row>
              <Row className="car-detail">
                <Col style={{color:"grey"}}><s>$24600</s></Col>
                <Col style={{color:"red"}}>$2400</Col>
                <Col className="Save">$600</Col>
              </Row>
              <hr></hr>


              <Card.Text className='car-detail'>
                MINI Hatch 1.5 Cooper Clas...<br></br>
                <a href="#more">learn more</a>
              </Card.Text>

            </Card.Body>
          </a>

          <a href="#mini-hatch" type="submit" className='card2'><Card.Img className="car" variant="top" src={car8} />
            <Card.Body >
              <Row className="car-detail">
                <Col style={{color:"grey"}}><s>MRRP</s></Col>
                <Col style={{color:"red"}}>Now</Col>
                <Col className="Save">Save</Col>
              </Row>
              <Row className="car-detail">
                <Col style={{color:"grey"}}><s>$24600</s></Col>
                <Col style={{color:"red"}}>$2400</Col>
                <Col className="Save">$600</Col>
              </Row>
              <hr></hr>


              <Card.Text className='car-detail'>
                MINI Hatch 1.5 Cooper Clas...<br></br>
                <a href="#more">learn more</a>
              </Card.Text>

            </Card.Body>
          </a>


        </Carousel>

        <a  type="submit" className="viewMore-btn">View More Details</a>
      </Card>



      <Row className="advert">
        <Col className="advert-col1">
          <h5>Place an advert on Auto Trader</h5>
          <p2>Get the price you deserve</p2><br /><br />
          <p3>See our :<span> advertising prices</span></p3><br />
          <Row>
            <Col><p4>Registration</p4>
              <br />
              <input placeholder="e.g.LL58JFK"></input>
            </Col>
            <Col><p4>Current mileage</p4>
              <br />
              <input placeholder="e.g.50000"></input>
            </Col>
          </Row>

          <button href="#create your advert" type="submit" className="advert-btn">Create your advert</button>
          <br />
          <button className="manage-btn">Manage existing adverts</button>

        </Col>
        <Col ><img className="girl-img" src={girl} /></Col>

      </Row>


      {/* Discover EV MOTORS */}



      <Card id='ev-header' >
        <p>Discover EV Motors</p>

        <Carousel className='ev' responsive={responsive}>

          <a href="/hyundai " type="submit" className='ev1'><Card.Img className='ev-img' variant="top" src={ev1} />
            <Card.Body >
              <Card.Text className='ev1-txt'>
                HYUNDAI IOBIQ 5
              </Card.Text>
            </Card.Body></a>

          <a href="/tesla-model" type="submit" className='ev1'><Card.Img className='ev-img' variant="top" src={ev2} />
            <Card.Body>
              <Card.Text className='ev2-txt'>
                TESLA MODEL 3
              </Card.Text>
            </Card.Body></a>

          <a href="/jaguar" type="submit" className='ev1'><Card.Img className='ev-img' variant="top" src={ev3} />
            <Card.Body >
              <Card.Text className='ev3-txt'>
                JAGUAR I-PACE
              </Card.Text>
            </Card.Body></a>

          <a href="/volkswagen" type="submit" className='ev1'><Card.Img className='ev-img' variant="top" src={ev4} />
            <Card.Body>
              <Card.Text className='ev4-txt'>
                VOLKSWAGEN ID.4
              </Card.Text>
            </Card.Body>
          </a>

        </Carousel>

      </Card>





      {/* BUYING ESSENTIAL */}




      <Card className='clip-head' >
        <p>Buying essentials</p>

        <Carousel className='clip' responsive={responsive}>

          <a href="/whats it worth" type="submit" className='clip1'><Card.Img className='clip-img' variant="top" src={clip1} />
            <Card.Body >
              <span className="clip-body">WHAT'S IT WORTH</span> <br /><br />
              <Card.Text className='clip-txt'>
                Get a free valuation.
                Sell or part-exchange your car at the right price.
              </Card.Text>
            </Card.Body></a>

          <a href="/security advice" type="submit" className='clip2'><Card.Img className='clip-img' id='img2' variant="top" src={clip1} />
            <Card.Body>
              <span className="clip-body">SECURITY ADVICE</span> <br /><br />
              <Card.Text className='clip-txt'>
                Advice on how to buy and sell safely.
              </Card.Text>
            </Card.Body></a>

          <a href="/car finance and loan" type="submit" className='clip3'><Card.Img className='clip-img' variant="top" src={clip1} />
            <Card.Body >
              <span className="clip-body">CAR FINANCE & LOANS</span><br /><br />
              <Card.Text className='clip-txt'>
                Discover how much you can borrow and find the right package for you.
              </Card.Text>
            </Card.Body></a>

          <a href="/cars history" type="submit" className='clip4'><Card.Img className='clip-img' variant="top" src={clip1} />
            <Card.Body>
              <span className="clip-body">CHECK CAR'S HISTORY</span> <br /><br />
              <Card.Text className='clip-txt'>
                Have complete peace of mind before you buy your next car
              </Card.Text>
            </Card.Body></a>

        </Carousel>

      </Card>



      {/* THE LATEST FROM AUTO TRADER */}

      <Card id='auto-header' >
        <p>The Latest From Auto Trader</p>

        <Carousel className='auto' responsive={responsive}>

          <a href="/news" type="submit" className='auto1'><Card.Img className='auto-img' variant="top" src={news} />
            <Card.Body > KEN BLOCK-RP
              <Card.Text className='auto1-txt'>
                YouTube megastar and figurehead for a generation of car fans dies in snowmobile accident <br />
                <span>News</span>
              </Card.Text>

            </Card.Body></a>

          <a href="/abarth" type="submit" className='auto2'><Card.Img className='auto-img' variant="top" src={best} />
            <Card.Body>Best Cars Comming in 2023
              <Card.Text className='auto1-txt'>
               There's a lot to loo forward to in the year ahead-here
               are the cars we're most excited about driving livin in 2023<br/> 
               <span>Best</span>
              </Card.Text>
            </Card.Body></a>

          <a href="/living" type="submit" className='auto3'><Card.Img className='auto-img' variant="top" src={living} />
            <Card.Body >Living with a .. Vauxhall astra plug-in hubrid
              <Card.Text className='auto1-txt'>
                Vauxhall's bold new Astra suggests a return to form- we're testing the theory 
                with six months in the latest plug-in hybrid version<br/>
                <span>Living</span>
              </Card.Text>
            </Card.Body></a>

          <a href="/best cars of 2023" type="submit" className='auto4'><Card.Img className='auto-img' variant="top" src={best2} />
            <Card.Body>Best cars of 2022
              <Card.Text className='auto1-txt'>
               From supercars to practical seven-seat people carriers here's our selection of 
               the best cars we've driven in 2022<br/>
               <span>Best</span>
              </Card.Text>
            </Card.Body>
          </a>

        </Carousel>

      </Card>










    </>

  )
}

export default Body