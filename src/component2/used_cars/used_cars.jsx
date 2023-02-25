import used from "./used_car_img/used.jpg"

// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";

import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";
import Main from "../../carsbrand/main";
// import { Card } from "bootstrap-react";
import Card from 'react-bootstrap/Card';

// import Button from "react-bootstrap/esm/Button";
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';

import Carousel from 'react-multi-carousel';

import img1 from "./used_car_img/audi-logo.jpg"
import img2 from "./used_car_img/bmw-logo.jpg"

import img3 from "./used_car_img/ford-logo.jpg"
import img4 from "./used_car_img/mercedes-logo.jpg"

import bluecar from "./used_car_img/bluecar.png"
import greencar from "./used_car_img/green.png"


import { MDBCard, MDBCardTitle, MDBCardText, MDBCardOverlay, MDBCardImage } from 'mdb-react-ui-kit';

import bg1 from "./used_car_img/fordbg.png"
import bg2 from "./used_car_img/bmwbg.png"
import bg3 from "./used_car_img/mercedesbg.png"
import bgcar1 from "./used_car_img/fordcar.png"
import bgcar2 from "./used_car_img/bmwcar.png"
import bgcar3 from "./used_car_img/mercedescar.png"

import smallcar1 from "./used_car_img/smallcar.png"
import smallcar2 from "./used_car_img/electriccar.png"
import smallcar3 from "./used_car_img/familycar.png"
import smallcar4 from "./used_car_img/studentcar.png"
import { CardBody } from "bootstrap-react";






function Used_cars() {

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);


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
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };



  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
      <Card style={{ width: '21rem', height: "21rem", marginLeft: "4%", marginTop: "7%" }}>
        <Card.Body style={{ textAlign: "center" }}>USED CARS
          <Card.Title style={{ marginTop: "10px" }}>The UK’s largest choice of pre-loved cars</Card.Title>
          <Row style={{ marginTop: "20px" }} >
            <Col>
              <input style={{ padding: "5px " }} placeholder="postcode" size="12" ></input>
            </Col>
            <Col>
              <Dropdown style={{ textAlign: "left ", marginLeft: "8px" }}  >
                <Dropdown.Toggle variant="transparent" id="dropdown-basic"> National</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col>

              <Dropdown style={{ textAlign: "left", marginLeft: "1px", marginTop: "20px", paddingRight: "55px" }} >
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">Make</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown></Col>
            <Col>
              <Dropdown style={{ textAlign: "left", marginLeft: "1px", marginTop: "20px" }} >
                <Dropdown.Toggle variant="transparent" id="dropdown-basic"> Model</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>


          <button style={{ marginTop: "25px", padding: "10px 80px" }} className="search-car">Search 442,342 cars</button>

          <button style={{marginRight:"50px"}} className="more-btn" href="#">More option</button>
        </Card.Body>
      </Card>

      <img style={{width: "98%", marginLeft: "1%", height: "28rem", zIndex: "-1" }} className="road-img" src={used} />




      {/* <img style={{ width: "98%", marginLeft: "1%", height: "28rem" }} src={}></img> */}

      <Card style={{ width: "98%", marginLeft: "1%", marginTop: "10%", textAlign: "center", fontSize: "30px" }}>
        Peace of mind, every step of the way

        <Row style={{ width: "98%", marginTop: "3%", marginLeft: "1%" }}>

          <Col style={{ backgroundColor: "darkblue" }}>
            <Row style={{}}>
              <button
                style={{ color: "white", Left: "0px", border: "0px", padding: "10px 10px", backgroundColor: "transparent" }}
                onClick={() => setOpen1(!open1)}
                aria-controls="collapse-text"
                aria-expanded={open1}

              >
                Pay the right price
              </button>
            </Row>
            <Collapse in={open1}>

              <div id="collapse-text">
                <Container className='footer-container'>
                  <Row style={{ color: "white", textAlign: "left", marginLeft: "30px" }}>We make it easy for you to find a great deal by showing you how the price compares to similar cars on the market.</Row>

                </Container>
              </div>
            </Collapse>
          </Col>
          <Col style={{ backgroundColor: "red" }}>Heksdcn</Col>
        </Row>
      </Card>


      {/* Browse by brands */}

      <Card style={{ width: "99%", marginTop: "7%", marginBottom: "5%", marginLeft: "1%", border: "0px" }} >
        <p className="card-p">Browse by brand</p>

        <Carousel responsive={responsive}>

          <a href="/Audi" type="submit" className='card1'><Card.Img style={{ marginLeft: "14%" }} className='img' variant="top" src={img1} />
            <Card.Body >
              <Card.Text className='card-txt'>
                AUDI
              </Card.Text>
            </Card.Body></a>

          <a href="/BMW" type="submit" className='card1'><Card.Img style={{ marginLeft: "14%" }} className='img' id='img2' variant="top" src={img2} />
            <Card.Body>
              <Card.Text className='card-txt'>
                BMW
              </Card.Text>
            </Card.Body></a>

          <a href="/FORD" type="submit" className='card1'><Card.Img style={{ marginLeft: "14%" }} className='img' variant="top" src={img3} />
            <Card.Body >
              <Card.Text className='card-txt'>
                FORD
              </Card.Text>
            </Card.Body></a>

          <a href="/Mercedes" type="submit" className='card1'><Card.Img style={{ marginLeft: "14%" }} className='img' variant="top" src={img4} />
            <Card.Body>
              <Card.Text className='card-txt'>
                MERCEDES
              </Card.Text>
            </Card.Body></a>


          <a href="/Audi" type="submit" className='card1'><Card.Img style={{ marginLeft: "14%" }} className='img' variant="top" src={img1} />
            <Card.Body >
              <Card.Text className='card-txt'>
                AUDI
              </Card.Text>
            </Card.Body></a>

          <a href="/BMW" type="submit" className='card1'><Card.Img style={{ marginLeft: "14%" }} className='img' id='img2' variant="top" src={img2} />
            <Card.Body>
              <Card.Text className='card-txt'>
                BMW
              </Card.Text>
            </Card.Body></a>

          <a href="/FORD" type="submit" className='card1'><Card.Img style={{ marginLeft: "14%" }} className='img' variant="top" src={img3} />
            <Card.Body >
              <Card.Text className='card-txt'>
                FORD
              </Card.Text>
            </Card.Body></a>

          <a href="/Mercedes" type="submit" className='card1'><Card.Img style={{ marginLeft: "14%" }} className='img' variant="top" src={img4} />
            <Card.Body>
              <Card.Text className='card-txt'>
                MERCEDES
              </Card.Text>
            </Card.Body></a>

        </Carousel>
        <button className="collapse-btn" style={{ width: "15%", marginLeft: "43%", marginTop: "40px", border: "0px", backgroundColor: "transparent" }}> view more</button>
      </Card>


      <Row style={{ width: "98%", marginLeft: "1%", marginBottom: "5%" }}>
        <Col style={{ marginTop: "30px", height: "23rem", backgroundColor: " #222b5e", color: "white" }}>
          <h1 style={{ fontSize: "30px", fontWeight: "350", margin: "80px 40px auto 40px" }}>Have a car to part-exchange?</h1>
          <h1 style={{ fontSize: "20px", fontWeight: "300", margin: "20px 40px auto 40px" }}>Get a free, instant valuation so you know exactly how much you can put towards your next car.</h1>
          <button style={{ backgroundColor: "transparent", margin: "40px 40px", padding: "7px 25px", border: " 1.5px solid white", color: "white" }}>value my car</button>
        </Col>

        <Col style={{ paddingTop: "30px", marginRight: "-250", backgroundColor: "#f7f6f5", zIndex: "-1" }}>
          <h1 style={{  textAlign:"center",color: "grey", fontSize: "30px", fontWeight: "350" }}>Used Car Valuations <br></br>
            Provider of the Year</h1>

          <h1 style={{ textAlign:"center",color: "grey", fontSize: "20px", fontWeight: "350" }}>As voted for by Car Dealer Power 2019 </h1>
          <img style={{ position: "absolute", width: "40%", marginTop: "120px",marginLeft:"30px" }} src={bluecar} />


        </Col>
      </Row>




      <Row style={{ width: "98%", marginLeft: "1%", marginBottom: "5%", marginTop: "8%" }}>

        <Col style={{ marginLeft: "-250px", backgroundColor: "#f7f6f5", zIndex: "-1", paddingTop: "30px" }}>
          <h1 style={{ color: "grey", fontSize: "30px", fontWeight: "350", marginLeft: "40%", marginTop: "40px" }}>Watch our latest reviews on YouTube</h1>

          <img style={{ position: "absolute", width: "40%", marginLeft: "18%", marginTop: "120px", zIndex: "1", transform: "scaleX(-1)" }} src={greencar} />


        </Col>

        <Col style={{ marginTop: "30px", height: "23rem", backgroundColor: " #123b2a", color: "white" }}>
          <h1 style={{ fontSize: "30px", fontWeight: "350", margin: "80px 40px auto 40px" }}>Have a car to part-exchange?</h1>
          <h1 style={{ fontSize: "20px", fontWeight: "300", margin: "20px 40px auto 40px" }}>Get a free, instant valuation so you know exactly how much you can put towards your next car.</h1>
          <button style={{ backgroundColor: "transparent", margin: "40px 40px", padding: "7px 25px", border: " 1.5px solid white", color: "white" }}>value my car</button>
        </Col>

      </Row>



      {/* MDB */}

      <MDBCard style={{ width: "96%", marginLeft: "2%", marginBottom: "4%", marginTop: "10%", border: "0px" }}  >
        <p className="card-p">Popular models in the UK</p>
        <Carousel responsive={responsive1}>

          <a style={{ width: "24rem", height: "23rem", backgroundColor: "#f7f6f5" }} href="/#used ford" type="submit" >
            <MDBCardImage style={{ width: "12rem", marginLeft: "25%" }} overlay src={bg1} alt='...' />
            <MDBCardOverlay>
              <img style={{ width: "23rem", marginTop: "40%" }} src={bgcar1}></img>
              <button style={{ width: "45%", marginLeft: "25%", marginTop: "20px", border: "0px", backgroundColor: "transparent", textDecoration: "2px orange underline" }}>USED FORD FIESTA</button>
            </MDBCardOverlay>
          </a>


          <a style={{ width: "24rem", height: "23rem", backgroundColor: "#f7f6f5" }} href="/#used bmw" type="submit" >
            <MDBCardImage style={{ width: "12rem", marginLeft: "25%" }} overlay src={bg2} alt='...' />
            <MDBCardOverlay>
              <img style={{ width: "23rem", marginTop: "40%" }} src={bgcar2}></img>
              <button style={{ width: "45%", marginLeft: "25%", marginTop: "20px", border: "0px", backgroundColor: "transparent", textDecoration: "2px orange underline" }}>USED FORD FIESTA</button>
            </MDBCardOverlay>
          </a>

          <a style={{ width: "26rem", height: "23rem", backgroundColor: "#f7f6f5" }} href="/#used  mercedes" type="submit" >
            <MDBCardImage style={{ width: "12rem", marginLeft: "25%" }} overlay src={bg3} alt='...' />
            <MDBCardOverlay>
              <img style={{ width: "23rem", marginTop: "40%" }} src={bgcar3}></img>
              <button style={{ width: "45%", marginLeft: "25%", marginTop: "20px", border: "0px", backgroundColor: "transparent", textDecoration: "2px orange underline" }}>USED FORD FIESTA</button>
            </MDBCardOverlay>
          </a>



        </Carousel>
      </MDBCard>

      {/* </Card> */}

      <Card style={{ width: "96%", marginLeft: "2%", border: "0px" }}>
        <p>Top picks from the experts</p>

        <Carousel className='clip' responsive={responsive}>

          <a href="" type="submit" className='clip1'><Card.Img className='clip-img' variant="top" src={smallcar1} />
            <Card.Body >
              <span className="clip-body">BEST SMALL CARS</span> <br /><br />
              <Card.Text className='clip-txt'>
                Nippy, efficient and perfect for tight spaces
              </Card.Text>
            </Card.Body></a>

          <a href="" type="submit" className='clip2'><Card.Img className='clip-img' id='img2' variant="top" src={smallcar2} />
            <Card.Body>
              <span className="clip-body">BEST ELECTRIC CARS</span> <br /><br />
              <Card.Text className='clip-txt'>
                The environment friendly way to go
              </Card.Text>
            </Card.Body></a>

          <a href="" type="submit" className='clip3'><Card.Img className='clip-img' variant="top" src={smallcar3} />
            <Card.Body >
              <span className="clip-body">BEST FAMILY CARS</span><br /><br />
              <Card.Text className='clip-txt'>
                Big on space without compromising on style
              </Card.Text>
            </Card.Body></a>

          <a href="" type="submit" className='clip4'><Card.Img className='clip-img' variant="top" src={smallcar4} />
            <Card.Body>
              <span className="clip-body">BEST CAR FOR STUDENTS</span> <br /><br />
              <Card.Text className='clip-txt'>
                Practical, cool, without blowing the budget
              </Card.Text>
            </Card.Body></a>

        </Carousel>

      </Card>



      {/* 6 item carousel */}
      <MDBCard style={{ width: "96%", marginLeft: "2%", marginBottom: "4%", marginTop: "10%", border: "0px" }}  >
        <p className="card-p">Guides to buying a used car</p>
        {/* <Carousel responsive={responsive1}> */}

        <div style={{ textAlign: "center" }}>
          <Row >
            <Col >
              <a style={{ width: "24rem", border: "1px solid lightgrey" }} href="" type="submit" ><Card.Img className='clip-img' variant="top" src={smallcar4} />
                <Card.Body>
                  <span className="clip-body">CHOOSING A FUEL TYPE</span> <br /><br />
                  <Card.Text style={{ color: "grey" }} className='clip-txt'>
                    Petrol, diesel, electric or hybrid? Discover whats right for you
                  </Card.Text>
                </Card.Body></a>
            </Col>
            <Col >
              <a style={{ width: "24rem", border: "1px solid lightgrey" }} href="" type="submit" ><Card.Img className='clip-img' variant="top" src={smallcar4} />
                <Card.Body>
                  <span className="clip-body">CHECKING ITS HISTORY</span> <br /><br />
                  <Card.Text style={{ color: "grey" }} className='clip-txt'>
                    See why it's important to check a car's past before you buy.
                  </Card.Text>
                </Card.Body></a></Col>
            <Col >
              <a style={{ width: "24rem", border: "1px solid lightgrey" }} href="" type="submit" ><Card.Img className='clip-img' variant="top" src={smallcar4} />
                <Card.Body>
                  <span className="clip-body">BOOKING A TEST DRIVE</span> <br /><br />
                  <Card.Text style={{ color: "grey" }} className='clip-txt'>
                    Learn what to do before, during and after your test drive.
                  </Card.Text>
                </Card.Body></a></Col>
          </Row>

          <Row style={{ marginTop: "2%" }} >
            <Col >
              <a style={{ width: "24rem", border: "1px solid lightgrey" }} href="" type="submit" ><Card.Img className='clip-img' variant="top" src={smallcar4} />
                <Card.Body>
                  <span className="clip-body">BUYONG ON FINANCE</span> <br /><br />
                  <Card.Text style={{ color: "grey" }} className='clip-txt'>
                    From HP to PCP, our finance guide has you covered.
                  </Card.Text>
                </Card.Body></a>
            </Col>
            <Col >
              <a style={{ width: "24rem", border: "1px solid lightgrey" }} href="" type="submit" ><Card.Img className='clip-img' variant="top" src={smallcar4} />
                <Card.Body>
                  <span className="clip-body">PAYING A PRIVATE SELLER</span> <br /><br />
                  <Card.Text style={{ color: "grey" }} className='clip-txt'>
                    Learn which payment options are more secure.
                  </Card.Text>
                </Card.Body></a></Col>
            <Col >
              <a style={{ width: "24rem", border: "1px solid lightgrey" }} href="" type="submit" ><Card.Img className='clip-img' variant="top" src={smallcar4} />
                <Card.Body>
                  <span className="clip-body">SORTING THE PAPERWORL</span> <br /><br />
                  <Card.Text style={{ color: "grey" }} className='clip-txt'>
                    All the documents you need to buy your next car
                  </Card.Text>
                </Card.Body></a></Col>
          </Row>
        </div>
      </MDBCard>


      {/* Questioned Answered */}


      <Card style={{ width: "98%", marginLeft: "1%", marginTop: "7%", marginBottom: "5%", textAlign: "center", fontSize: "30px", border: "0px" }}>
        Your questions answered
        <Row style={{ marginTop: "2%" }}>
          <button
            onClick={() => setOpen2(!open2)}
            aria-controls="collapse-text2"
            aria-expanded={open2}
            style={{ marginLeft: "20%", width: "50%", fontSize: "18px" }}
            className="buying-btn2"
          >
            + When is the best time to buy a used car?
          </button>
        </Row>

        <Collapse in={open2}>

          <div id="collapse-text2">
            <Container className='footer-container'>
              <Card style={{ width: "57%", marginLeft: "16%", boxShadow: "0px 3px lightgrey" }}>
                <p style={{ color: "grey", fontSize: "16px" }} className="product-collapse-btn">There’s no fixed best time to buy a used car,
                  but there are a couple of trends you should be aware of.<br /><br />
                  New cars are released in March and September, with many buyers trading their current car in. This means there tends to be more choice of used cars around this time, and there can be reduced prices as sellers compete.
                  Less in-demand models may have further price reduction in April and October, when sellers are keen to shift their unsold cars.</p></Card>

            </Container>
          </div>
        </Collapse>


        <Row>
          <button
            onClick={() => setOpen3(!open3)}
            aria-controls="collapse-text2"
            aria-expanded={open3}
            style={{ marginLeft: "20%", width: "50%", fontSize: "18px" }}
            className="buying-btn2"
          >
            + Are used cars reliable?
          </button>
        </Row>

        <Collapse in={open3}>

          <div id="collapse-text2">
            <Container className='footer-container'>
              <Card style={{ width: "57%", marginLeft: "16%", boxShadow: "0px 3px lightgrey" }}>
                <p style={{ color: "grey", fontSize: "16px" }} className="product-collapse-btn">One of the biggest fears when buying a used car is that it won’t last long.
                  Auto Trader perform a 5-point background check on every car listed on our site, so you can buy in confidence that it’s roadworthy and legal. <br /><br />
                  You can also perform a full vehicle check to ensure the used car is correctly priced and as described. As for the car itself, you can check our expert
                  reviews to see how it performs for reliability, security and other key factors.
                </p></Card>

            </Container>
          </div>
        </Collapse>




        <Row>
          <button
            onClick={() => setOpen4(!open4)}
            aria-controls="collapse-text2"
            aria-expanded={open4}
            style={{ marginLeft: "20%", width: "50%", fontSize: "18px" }}
            className="buying-btn2"
          >
            + Can I test drive a used car?
          </button>
        </Row>

        <Collapse in={open4}>

          <div id="collapse-text2">
            <Container className='footer-container'>
              <Card style={{ width: "57%", marginLeft: "16%", boxShadow: "0px 3px lightgrey" }}>
                <p style={{ color: "grey", fontSize: "16px" }} className="product-collapse-btn">Test-driving is a great way to make sure a car meets your needs,
                  and that it’s in a good condition. You can arrange a test drive when you contact the seller on Auto Trader.<br /><br />
                  Make sure to check inside and outside the car, and be aware of any strange noises, vibrations or warning lights when you’re driving.
                  For more information, here’s our guide on what to look for in a test drive.
                </p></Card>

            </Container>
          </div>
        </Collapse>

        <Row>
          <button
            onClick={() => setOpen5(!open5)}
            aria-controls="collapse-text2"
            aria-expanded={open5}
            style={{ marginLeft: "20%", width: "50%", fontSize: "18px" }}
            className="buying-btn2"
          >
            + Can a used car be returned?
          </button>
        </Row>

        <Collapse in={open5}>

          <div id="collapse-text2">
            <Container className='footer-container'>
              <Card style={{ width: "57%", marginLeft: "16%", boxShadow: "0px 3px lightgrey" }}>
                <p style={{ color: "grey", fontSize: "16px" }} className="product-collapse-btn">If you buy a used car from a dealer and discover a fault within
                  the first 30 days, you can return it under the Consumer Rights Act.<br /> You’ll also have some protection under the Sale of Goods Act 1979,
                  which states the car must match its description and be fit for purpose.<br /><br />If you buy a used car from a private seller, then legally the seller
                  must be allowed to sell the car, and it must to match its description. If you can prove either are untrue, you can return the car.Due diligence
                  is important, as you’ll need to prove any faults or inaccurate descriptions were in place when you bought the car and not caused by you.
                </p></Card>

            </Container>
          </div>
        </Collapse>


        <Row>
          <button
            onClick={() => setOpen6(!open6)}
            aria-controls="collapse-text2"
            aria-expanded={open6}
            style={{ marginLeft: "20%", width: "50%", fontSize: "18px" }}
            className="buying-btn2"
          >
            + What is good mileage for a used car?
          </button>
        </Row>

        <Collapse in={open6}>

          <div id="collapse-text2">
            <Container className='footer-container'>
              <Card style={{ width: "57%", marginLeft: "16%", boxShadow: "0px 3px lightgrey" }}>
                <p style={{ color: "grey", fontSize: "16px" }} className="product-collapse-btn">As a general rule, 12,000-15,000 miles per year is considered average.
                  Higher mileage generally means more wear and tear, and you may need to replace brake pads or batteries after a certain number of miles. When looking at
                  a used car, check the servicing history to see how the car has been maintained. A used car listed with a full-service history (FSH) may cost more but will give you greater peace of mind.
                </p></Card>

            </Container>
          </div>
        </Collapse>


        <Row>
          <button
            onClick={() => setOpen7(!open7)}
            aria-controls="collapse-text2"
            aria-expanded={open7}
            style={{ marginLeft: "20%", width: "50%", fontSize: "18px" }}
            className="buying-btn2"
          >
            + What is a used car worth?
          </button>
        </Row>

        <Collapse in={open7}>

          <div id="collapse-text2">
            <Container className='footer-container'>
              <Card style={{ width: "57%", marginLeft: "16%", boxShadow: "0px 3px lightgrey" }}>
                <p style={{ color: "grey", fontSize: "16px" }} className="product-collapse-btn">Using a car valuation tool is a great way to get
                  a guide price on a used vehicle. Our car valuation tool combines data from several sources, including live ads and dealer websites,
                  to find an accurate value for a car so you can enter price negotiations knowing how much a used car is worth.
                </p></Card>

            </Container>
          </div>
        </Collapse>


        <Row>
          <button
            onClick={() => setOpen8(!open8)}
            aria-controls="collapse-text2"
            aria-expanded={open8}
            style={{ marginLeft: "20%", width: "50%", fontSize: "18px" }}
            className="buying-btn2"
          >
            + Are used cars cheaper to insure?
          </button>
        </Row>

        <Collapse in={open8}>

          <div id="collapse-text2">
            <Container className='footer-container'>
              <Card style={{ width: "57%", marginLeft: "16%", boxShadow: "0px 3px lightgrey" }}>
                <p style={{ color: "grey", fontSize: "16px" }} className="product-collapse-btn">There are several factors that can determine how much insurance you’ll pay,
                  including the condition of the car, your personal driving history and the level of coverage you choose.
                  Used cars tend to be cheaper to insure as they’re seen as less valuable than new cars, but this isn’t always the case so it’s worth getting a car insurance quote.
                </p></Card>

            </Container>
          </div>
        </Collapse>

        <Row>
          <button
            onClick={() => setOpen9(!open9)}
            aria-controls="collapse-text2"
            aria-expanded={open9}
            style={{ marginLeft: "20%", width: "50%", fontSize: "18px", borderBottom: "1px solid lightgrey" }}
            className="buying-btn2"
          >
            + Can I buy a used car online?
          </button>
        </Row>

        <Collapse in={open9}>

          <div id="collapse-text2">
            <Container className='footer-container'>
              <Card style={{ width: "57%", marginLeft: "16%", boxShadow: "0px 3px lightgrey" }}>
                <p style={{ color: "grey", fontSize: "16px" }} className="product-collapse-btn">You can browse used and nearly new cars available for
                  home delivery on Auto Trader. Simply enter your postcode and add ‘home delivery’ to your search, and we’ll help find the car that’s
                  perfect for you. With more choice than anywhere else and a 40-year history of helping people find their match, buying a car online is
                  easy on Auto Trader. Learn more about buying a car online.
                </p></Card>

            </Container>
          </div>
        </Collapse>

      </Card>


      <Card style={{width:"96%",marginLeft:"2%",border:"0px",marginBottom:"4%", textAlign: "center" }}>
        <p style={{ fontSize: "30px" }}>Send me great Auto Trader offers <br />and the latest vehicle reviews.</p>

        <Card style={{ width: '28rem', marginLeft: "32%", border: "0px" }}>

          <Card.Body style={{ textAlign: "left" }} >


            <label style={{ marginRight: "23%", fontSize: "14px" }}>your email</label><br />

            <input style={{ padding: "7px 100px 5px 7px" }} placeholder="e.g name@example.com" ></input>
            <button style={{ padding: "4px 30px 5px 4px", marginLeft: "10px", backgroundColor: "transparent", borderColor: "blue" }} >Sign up</button>
            <p style={{ fontSize: "14px", textAlign: "left" }}>By signing up, you agree to receive marketing emails in <br /> accordance with our privacy notice. You can unsubscribe at<br /> any time</p>

          </Card.Body>
        </Card>

      </Card>

    </>

  )
}


export default Used_cars