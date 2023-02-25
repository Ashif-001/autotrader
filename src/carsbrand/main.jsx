import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from "./brand.css"





function Main() {
    return (
        <>
           
            {/* <Row> */}
                <Card style={{ width: '21rem', marginLeft: "30px" }}>
                    <Card.Body>
                        <Row>
                            <Col><Card.Title>Filter</Card.Title></Col>
                            <Col style={{ marginLeft: "140px" }} type="submit"><a>Clear all</a></Col>
                        </Row>
                        <Row>
                            <Col>
                                <label>Models</label>

                                <Dropdown className="dropdown" size="12">
                                    <Dropdown.Toggle style={{}} variant="transparent" id="dropdown-basic"> Any</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <label>Body type</label>

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



                        <Row >

                            <Col>
                                <label>Min price</label>
                                <Dropdown className="dropdown" size="12">
                                    <Dropdown.Toggle variant="transparent" id="dropdown-basic"> Min price</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>

                            <Col>
                                <label>Min price</label>

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

                        <Row >
                            <Col>
                                <label>Fuel type</label>

                                <Dropdown className="dropdown">
                                    <Dropdown.Toggle variant="transparent" id="dropdown-basic">Any</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <label>Seats</label>

                                <Dropdown className="dropdown">
                                    <Dropdown.Toggle variant="transparent" id="dropdown-basic">Any</Dropdown.Toggle>
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


        </>
    );
}

export default Main;