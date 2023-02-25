import React from "react";
// import Audi from "./audi-detail.js";
import Entry from "../entry.jsx";
// import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "../brand.css"

import Main from "../main.jsx";
import bmw_detail from "./bmw_detail";


function createEntry(bmw) {
    return (
        <Entry
            key={bmw.id}
            Images={bmw.Images}
            name={bmw.name}
            class={bmw.class}
            type={bmw.type}
            seats={bmw.seats}
            engine={bmw.engine}
            price={bmw.price}


        />
    );
}

function BMW() {
    return (
        <>
<div>
            <h1 style={{ fontSize: "70px", marginTop: "30px", marginBottom: "100px" }}>
                BMW
            </h1>
            <Row >
               < Main />

                <Col >
                    <dl className="dictionary">{bmw_detail.map(createEntry)}</dl>
                </Col>

            </Row>


</div>

        </>
    )
}



export default BMW