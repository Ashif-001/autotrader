import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'react-multi-carousel/lib/styles.css';

import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// module.exports = {
//     'fontawesome-svg-core': {
//         'license': 'free'
//     }
// }


import logo from "./images/logo.png"



function Footer() {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);


    return <>
<hr></hr>
        <Row className="footer-row">
            <Col className="footer-col1">
                <div>
                    <img className="footer-logo" src={logo} /><br />
                    <div>
                        <Row> <a href="/contact-us" className="footer-btn">Contact us</a></Row>
                        <Row> <a href="/about-auto-trader" className="footer-btn">About Auto Trader</a></Row>
                        <Row>   <a href="/Careers" className="footer-btn">Careers</a></Row>
                        <Row> <a href="/Investment-information" className="footer-btn">Investment information</a></Row>
                        <Row> <a href="/Privacy-policies-and-terms" className="footer-btn">Privacy policies and terms</a></Row>
                        <Row>  <a href="/Selling terms & conditions" className="footer-btn">Selling terms & conditions</a></Row>
                        <Row>  <a href="/Brand advertising on Auto Trader" className="footer-btn">Brand advertising on Auto Trader</a></Row>
                        <a href="/Manage cookies" className="cookies-btn">Manage cookies</a>
                    </div>
                    </div>
            </Col>


            <Col className="mid-col">
                {/* <button className="product-btn2">+ Products % Services</button><br /> */}
                <Row>
                    <button
                        onClick={() => setOpen1(!open1)}
                        aria-controls="collapse-text"
                        aria-expanded={open1}
                        className="product-btn2"
                    >
                        +  Products & Services
                    </button>
                </Row>
                <Collapse in={open1}>

                    <div id="collapse-text">
                        <Container className='footer-container'>
                            <Row><a href="/Car valuations" className="product-collapse-btn">Car valuations</a></Row>
                            <Row><a href="/Sell my car" className="product-collapse-btn">Sell my car</a></Row>
                            <Row><a href="/Vehicle check" className="product-collapse-btn">Vehicle check</a></Row>
                            <Row><a href="/Car finance" className="product-collapse-btn">Car finance</a></Row>
                            <Row><a href="/Car insurance" className="product-collapse-btn">Car insurance</a></Row>
                            <Row><a href="/part exchange" className="product-collapse-btn">part exchange</a></Row>
                            <Row><a href="/finance calculator" className="product-collapse-btn">finance calculator</a></Row>
                        </Container>
                    </div>
                </Collapse>


                <Row>
                    <button
                        onClick={() => setOpen2(!open2)}
                        aria-controls="collapse-text2"
                        aria-expanded={open2}
                        className="buying-btn2"
                    >
                        + Buying advice
                    </button>
                </Row>

                <Collapse in={open2}>

                    <div id="collapse-text2">
                        <Container className='footer-container'>
                            <Row><a href="/Owner reviews" className="product-collapse-btn">Owner reviews</a></Row>
                            <Row><a href="/Buying & selling guides" className="product-collapse-btn">Buying & selling guides</a></Row>
                            <Row><a href="/Retailer award" className="product-collapse-btn">Retailer award</a></Row>
                            <Row><a href="/New car award" className="product-collapse-btn">New car award</a></Row>
                            <Row><a href="/Why Auto award?" className="product-collapse-btn">Why Auto award?</a></Row>
                        </Container>
                    </div>
                </Collapse>

                <Row>
                    <button
                        onClick={() => setOpen3(!open3)}
                        aria-controls="collapse-text2"
                        aria-expanded={open3}
                        className="quick-btn2"
                    >
                        + Quick search
                    </button>
                </Row>

                <Collapse in={open3}>

                    <div id="collapse-text2">
                        <Container className='footer-container'>
                            <Row><a href="/Car brands" className="product-collapse-btn">Car brands</a></Row>
                            <Row><a href="/All India location" className="product-collapse-btn">All India location</a></Row>
                            <Row><a href="/Find a car dealer" className="product-collapse-btn">Find a car dealer</a></Row>
                            <Row><a href="/Motability" className="product-collapse-btn">Motability</a></Row>
                            <Row><a href="/Classic cars" className="product-collapse-btn">Classic cars</a></Row>
                            <Row><a href="/Cheap cars" className="product-collapse-btn">Cheap cars</a></Row>
                            <Row><a href="/New car deals" className="product-collapse-btn">New car deals</a></Row>

                        </Container>
                    </div>
                </Collapse>


                {/* <button className="quick-btn2">+ Quick search</button><br /> */}

                <Row>
                    <button
                        onClick={() => setOpen4(!open4)}
                        aria-controls="collapse-text2"
                        aria-expanded={open4}
                        className="dealers-btn2"
                    >
                        + Auto Trader for dealers
                    </button>
                </Row>

                <Collapse in={open4}>

                    <div id="collapse-text2">
                        <Container className='footer-container'>
                            <Row><a href="/Dealer portal" className="product-collapse-btn">Dealer portal</a></Row>
                            <Row><a href="/advertising package" className="product-collapse-btn">advertising package</a></Row>
                            <Row><a href="/Pay as you go"  className="product-collapse-btn">Pay as you go</a></Row>
                        </Container>
                    </div>
                </Collapse>



                {/* <button className="dealers-btn2">+ Auto Trader for dealers</button><br /> */}
            </Col>


            <Col>
                <p2>Help us improve our website</p2><br />
                <button style={{backgroundColor:"white",borderColor:"blue",padding:"5px 50px 5px 10px",margin:"10px 0px ",color:"blue"}}>
                Send feedback</button>


                <Row style={{margin:"10px 0px 10px 0px"}}>
                    {/* <FontAwesomeIcon icon="fab fa-apple" /> */}
                    <Col><p3 style={{fontSize:"17px",fontWeight:"700",color:"white",backgroundColor:"black",padding:"0px 5px 0px 8px"}}>f</p3></Col>
                    <Col>twitter</Col>
                    <Col>yt</Col>
                    <Col>insta</Col>
                    <Col>tiktok</Col>
                    <Col>Giphy</Col>
                </Row>
                <button style={{backgroundColor:"black", color:"white",padding:"0px 40px 0px 5px",border:"0px",borderRadius:"3px"}}><span style={{fontSize:"10px",fontWeight:"400",marginLeft:"10px"}}>Download on the</span><br /> <span style={{marginLeft:"10px"}}>App Store</span></button>
                <button style={{backgroundColor:"black", color:"white",padding:"0px 40px 0px 5px",border:"0px",borderRadius:"3px",marginLeft:"20px"}}><span style={{fontSize:"12px",fontWeight:"400",marginLeft:"10px"}}>GET IT ON</span><br /> <span style={{marginLeft:"10px"}}>Google Play</span></button>

                {/* <button>GET IT ON<br /> Google Play</button> */}
                <Row style={{fontSize:"12px",fontWeight:"400"}}>
                    <Row style={{marginTop:"15px"}}>Copyright © Auto Trader Limited 2023.</Row>
                    <Row style={{marginTop:"10px"}}>
                        Auto Trader Limited is authorised and regulated by the Financial Conduct
                        Authority in relation to consumer credit and insurance mediation activities.
                        Our FCA firm reference number is 735711. Auto Trader Limited is a credit broker
                        and not a lender. Representative finance examples are for illustrative purposes only.
                        Finance is subject to status. Terms and conditions apply. Available to 18s and over.
                        UK residents only. Auto Trader receives a fee from retailers advertising finance and may
                        receive a commission from commercial partners for introducing customers to finance products.
                        These fees and commissions do not influence the amount a customer pays.
                    </Row><br/>
                    <Row style={{marginTop:"15px"}}>Registered office and headquarters</Row>
                    <br/>
                    <Row style={{marginTop:"10px"}}>4th Floor</Row>
                    <Row>1 Tony Wilson place</Row>
                    <Row>Manchester</Row>
                    <Row>M15 4FN</Row>
                    <Row>United Kingdom</Row>
                    <Row>Registered number 0123456789</Row>

                </Row>

            </Col>
        </Row>




    </>
}

export default Footer