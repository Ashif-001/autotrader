
import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";
import Main from "../../carsbrand/main";
// import { Card } from "bootstrap-react";
import Card from 'react-bootstrap/Card';

// import Button from "react-bootstrap/esm/Button";
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img from "./new_cars_img/top.jpg"
import give from "./new_cars_img/give.png"
import tesla from "./new_cars_img/tesla.png"

import audi from "./new_cars_img/audi-logo.jpg"
import bmw from "./new_cars_img/bmw-logo.jpg"
import ford from "./new_cars_img/ford-logo.jpg"
import mercedes from "./new_cars_img/mercedes-logo.jpg"

import bluecar from "./new_cars_img/bluecar.png"
import greencar from "./new_cars_img/greencar.png"


import Carousel from 'react-multi-carousel';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';

import { MDBCard, MDBCardTitle, MDBCardText, MDBCardOverlay, MDBCardImage } from 'mdb-react-ui-kit';
import bg1 from "../used_cars/used_car_img/fordbg.png"
import bg2 from "../used_cars/used_car_img/bmwbg.png"
import bg3 from "../used_cars/used_car_img/mercedesbg.png"
import bgcar1 from "../used_cars/used_car_img/fordcar.png"
import bgcar2 from "../used_cars/used_car_img/bmwcar.png"
import bgcar3 from "../used_cars/used_car_img/mercedescar.png"

import multicars from "./new_cars_img/multicar.png"
import greycar from "./new_cars_img/grey.png"
import greycar2 from  "./new_cars_img/leasingcar.png"
import { CardBody } from 'bootstrap-react';

function NewCar() {

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
                <Card.Body style={{ textAlign: "center" }}>BRAND NEW CARS
                    <Card.Title style={{ marginTop: "10px" }}>‘72’ number plate new car deals</Card.Title>
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

                    <button style={{ marginRight: "50px" }} className="more-btn" href="#">More option</button>
                </Card.Body>
            </Card>

            <Row style={{ marginTop: "5%", width: "50%", marginLeft: "28%" }}>
                <Col>Pre-haggled prices</Col>
                <Col>In stock and available now</Col>
                <Col>Flexible finance options</Col>
            </Row>

            <img style={{ marginBottom: "5%", width: "98%", marginLeft: "1%", height: "28rem", zIndex: "-1" }} className="road-img" src={img} />




            <Row style={{ width: "98%", height: "20rem", marginLeft: "1%", marginTop: "50px" }} >
                <Col style={{ width: "20%", }} className='give-col'><img className='give' src={give} /></Col>
                <Col className="mid">
                    <h4 style={{ textAlign: "center" }}>We're giving away an electric car every month!</h4>
                    <h7 style={{ textAlign: "center" }}>Enter for FREE for your chance to win a Tesla Model Y worth over £51,000!</h7>
                    <br /><button className='mid-btn'>Enter now</button><br />
                    <a href="#T&C"><h9>T&Cs Apply</h9></a>
                </Col>
                <Col className='tesla-col'><h1>WIN A<br></br>TESLA MODELY</h1><img className='tesla' src={tesla} /></Col>
            </Row>






            {/* Browse by brnads */}


            <Card style={{ width: "100%", margin: "5% auto 5% auto", border: "0px" }} >
                <p className="card-p">Browse by brand</p>

                <Carousel className='caro' responsive={responsive}>

                    <a href="/Audi" type="submit" style={{ width: "85%" }} className='card1'><Card.Img style={{ width: "50%", marginLeft: "25%" }} variant="top" src={audi} />
                        <Card.Body >
                            <Card.Text className='card-txt'>
                                AUDI
                            </Card.Text>
                        </Card.Body></a>

                    <a href="/BMW" type="submit" style={{ width: "85%" }} className='card1'><Card.Img style={{ width: "50%", marginLeft: "25%" }} id='img2' variant="top" src={bmw} />
                        <Card.Body>
                            <Card.Text className='card-txt'>
                                BMW
                            </Card.Text>
                        </Card.Body></a>

                    <a href="/FORD" type="submit" style={{ width: "85%" }} className='card1'><Card.Img style={{ width: "50%", marginLeft: "25%" }} variant="top" src={ford} />
                        <Card.Body >
                            <Card.Text className='card-txt'>
                                FORD
                            </Card.Text>
                        </Card.Body></a>

                    <a href="/Mercedes" type="submit" style={{ width: "85%" }} className='card1'><Card.Img style={{ width: "50%", marginLeft: "25%" }} variant="top" src={mercedes} />
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
                                <Col><a href="/Abarth" type="submit" className='newcar-brand-btn ' >Abarth</a></Col>
                                <Col><a href="/alfa-romeo" type="submit" className='newcar-brand-btn '>Alfa Romeo</a></Col>
                                <Col><a href="/alpine" type="submit" className='newcar-brand-btn '>Alpine</a></Col>
                                <Col><a href="/aston martin" type="submit" className='newcar-brand-btn '>Aston Martin</a></Col>
                            </Row>

                            <Row>
                                <Col><a href="/bently" type="submit" className='newcar-brand-btn'>Bently</a></Col>
                                <Col><a href="/citroen" type="submit" className='newcar-brand-btn'>Citroen</a></Col>
                                <Col><a href="/cupra" type="submit" className='newcar-brand-btn'>CUPRA</a></Col>
                                <Col><a href="/aston martin" type="submit" className='newcar-brand-btn'>Aston Martin</a></Col>
                            </Row>
                            <Row>
                                <Col><a href="/DS Automobiles" type="submit" className='newcar-brand-btn'>DS Automobiles</a></Col>
                                <Col><a href="/Ferrari" type="submit" className='newcar-brand-btn'>Ferrrari</a></Col>
                                <Col><a href="/fiati" type="submit" className='newcar-brand-btn'>FIAT</a></Col>
                                <Col><a href="/aston martin" type="submit" className='newcar-brand-btn'>Aston Martin</a></Col>
                            </Row>
                            <Row>
                                <Col><a href="/abarth" type="submit" className='newcar-brand-btn'>Abarth</a></Col>
                                <Col><a href="/alfa romeo" type="submit" className='newcar-brand-btn'>Alfa Romeo</a></Col>
                                <Col><a href="/alpine" type="submit" className='newcar-brand-btn'>Alpine</a></Col>
                                <Col><a href="/aston martin" type="submit" className='newcar-brand-btn'>Aston Martin</a></Col>
                            </Row>

                            <Row>
                                <Col><a href="/abarth" type="submit" className='newcar-brand-btn ' >Abarth</a></Col>
                                <Col><a href="/abarth" type="submit" className='newcar-brand-btn '>Alfa Romeo</a></Col>
                                <Col><a href="/abarth" type="submit" className='newcar-brand-btn '>Alpine</a></Col>
                                <Col><a href="/abarth" type="submit" className='newcar-brand-btn '>Aston Martin</a></Col>
                            </Row>

                            <Row>
                                <Col><a href="/abarth" type="submit" className='newcar-brand-btn'>Abarth</a></Col>
                                <Col><a href="/abarth" type="submit" className='newcar-brand-btn'>Alfa Romeo</a></Col>
                                <Col><a href="/abarth" type="submit" className='newcar-brand-btn'>Alpine</a></Col>
                                <Col><a href="/abarth" type="submit" className='newcar-brand-btn'>Aston Martin</a></Col>
                            </Row>
                            <Row>
                                <Col><a href="/abarth" type="submit" className='newcar-brand-btn'>Abarth</a></Col>
                                <Col><a href="/abarth" type="submit" className='newcar-brand-btn'>Alfa Romeo</a></Col>
                                <Col><a href="/abarth" type="submit" className='newcar-brand-btn'>Alpine</a></Col>
                                <Col><a href="/abarth" type="submit" className='newcar-brand-btn'>Aston Martin</a></Col>
                            </Row>
                            <Row>
                                <Col><a href="/abarth" type="submit" className='newcar-brand-btn'>Abarth</a></Col>
                                <Col><a href="/abarth" type="submit" className='newcar-brand-btn'>Alfa Romeo</a></Col>
                                <Col><a href="/abarth" type="submit" className='newcar-brand-btn'>Alpine</a></Col>
                                <Col><a href="/abarth" type="submit" className='newcar-brand-btn'>Aston Martin</a></Col>
                            </Row>

                        </Container>
                    </div>
                </Collapse>
            </Card>




            {/* <></> */}
            <Row style={{ width: "98%", marginLeft: "1%", marginBottom: "5%" }}>
                <Col style={{ marginTop: "30px", height: "23rem", backgroundColor: " #222b5e", color: "white" }}>
                    <h1 style={{ fontSize: "30px", fontWeight: "350", margin: "80px 40px auto 40px" }}>Pre-haggld prices just for you</h1>
                    <h1 style={{ fontSize: "18px", fontWeight: "300", margin: "20px 40px auto 40px" }}>There's no need to negotiate. Just find the car you want and we'll display the dealer's discount upfront. Simple.</h1>
                    <button style={{ backgroundColor: "transparent", margin: "40px 40px", padding: "7px 25px", border: " 1.5px solid white", color: "white" }}>View details</button>
                </Col>

                <Col style={{ paddingTop: "30px", marginRight: "", backgroundColor: "#f7f6f5", zIndex: "-1" }}>
                    <h1 style={{ textAlign: "center", color: "grey", fontSize: "30px", fontWeight: "350" }}>Average Saving</h1>
                    <h1 style={{ textAlign: "center", color: "grey", fontSize: "80px", fontWeight: "900" }}>£3,042</h1>
                    <h1 style={{ textAlign: "center", color: "grey", fontSize: "30px", fontWeight: "350" }}>off the RRP on new cars*</h1>

                    <img style={{ position: "absolute", width: "49%", zIndex: "1" }} src={bluecar} />


                </Col>
            </Row>


            <Row style={{ width: "98%", marginLeft: "1%", marginBottom: "5%", marginTop: "8%" }}>

                <Col style={{ marginLeft: "-250px", backgroundColor: "#f7f6f5", zIndex: "-1", paddingTop: "30px" }}>
                    <h1 style={{ color: "grey", fontSize: "80px", fontWeight: "900", marginLeft: "40%", marginTop: "10px" }}>27,268</h1>
                    <h1 style={{ textAlign: "center", fontSize: "18px", fontWeight: "300", margin: "20px 40px auto 80px" }}>new cars in stock today</h1>

                    <img style={{ position: "absolute", width: "50%", marginLeft: "6%", marginTop: "40px", zIndex: "1", transform: "scaleX(-1)" }} src={greencar} />
                </Col>

                <Col style={{ marginTop: "30px", height: "23rem", backgroundColor: " #123b2a", color: "white" }}>
                    <h1 style={{ fontSize: "30px", fontWeight: "350", margin: "80px 40px auto 40px" }}>Have a car to part-exchange?</h1>
                    <h1 style={{ fontSize: "20px", fontWeight: "300", margin: "20px 40px auto 40px" }}>Get a free, instant valuation so you know exactly how much you can put towards your next car.</h1>
                    <button style={{ backgroundColor: "transparent", margin: "40px 40px", padding: "7px 25px", border: " 1.5px solid white", color: "white" }}>value my car</button>
                </Col>

            </Row>



            {/* images with bg images */}

            <MDBCard style={{ width: "96%", marginLeft: "2%", marginBottom: "4%", marginTop: "10%", border: "0px" }}  >
                <p className="card-p">Find deals on popular models</p>
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





            <Row style={{ display: "flex", gap: "25px", width: "98%", height: "35rem", marginLeft: "1%", marginBottom: "5%", marginTop: "8%" }}>

                <Col style={{ backgroundColor: "#f7f6f5", zIndex: "-1" }}>
                    <h1 style={{ marginLeft: "10px", fontSize: "38px", fontWeight: "350", marginTop: "10px" }}>Get creative. Build your own.</h1>
                    <h1 style={{ fontSize: "18px", fontWeight: "400", margin: "20px 40px auto 10px", color: "grey" }}>Can't find the car you're looking for? No problem - we'll help you build it! Then, just order online from your local dealer.</h1>
                    <button style={{ backgroundColor: "transparent", margin: "10px", padding: "7px 25px", border: " 1.5px solid blue ", color: "blue" }}>Build you own</button><br />
                    <img style={{ position: "absolute", width: "40%", marginLeft: "7%", marginTop: "80px" }} src={multicars} />
                </Col>

                <Col style={{ backgroundColor: " #f7f6f5" }}>
                    <h1 style={{ fontSize: "30px", fontWeight: "350", margin: "10px 40px auto 10px" }}>Award winning cars. As voted by you.</h1>
                    <h1 style={{ fontSize: "20px", fontWeight: "400", margin: "20px 40px auto 10px", color: "grey" }}>From the coveted 'New Car of the Year' to 'Best New Car for Families - see which cars get your seal of approval.</h1>
                    <button style={{ backgroundColor: "transparent", margin: "10px", padding: "7px 25px", border: " 1.5px solid blue", color: "blue" }}>Award winning car</button><br />
                    <img style={{ position: "absolute", width: "40%", margin: "10px", marginTop: "80px", marginLeft: "7%" }} src={greycar} />

                </Col>

            </Row>



            {/* Discover leasing cars */}


            <Row style={{ display: "flex", gap: "25px", width: "98%", height: "24rem", marginLeft: "1%", marginBottom: "5%", marginTop: "8%", backgroundColor: "#f7f6f5" }}>
                {/* <Row style={{ display: "flex", gap: "25px", width: "94%", marginLeft: "3%", height: "20rem", marginTop: "2.5%"}}> */}
                <Col style={{marginLeft: "3%", height: "20rem", marginTop: "5.5%",marginRight:"2%"}}>                  
                    <h1 style={{fontWeight:"300",}}>Discover car leasing</h1>
                    <p style={{fontWeight:"400",fontSize:"16px",textAlign:"left",color:"grey"}}>Want to drive a new car every few years? Personal car leasing is 
                    increasingly popular. It’s like renting a car; you simply make a fixed monthly payment 
                    and return the car when your contract ends.</p> 
                    <button style={{border:"2px solid blue",padding:"6px 20px",color:"blue"}}>find a lease deal</button>                                      
                </Col>
               
                <Col>
                <img style={{width:"45rem"}} src={greycar2}></img>
                </Col> </Row>
            {/* </Row> */}

        </>
    )
}

export default NewCar