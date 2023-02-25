import React from "react";
// import Audi from "./audi-detail.js";
import Entry from "../entry.jsx";
// import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Dropdown from 'react-bootstrap/Dropdown';
import styles from "../brand.css"

// import BMW from "./BMW-detail.js"
import Main from "../main.jsx";
import Audi_detail from "./audi-detail.js";


function createEntry(emojiTerm) {
    return (
        <Entry
            key={emojiTerm.id}
            Images={emojiTerm.Images}
            name={emojiTerm.name}
        />
    );
}

function Audi() {
    return (
        <>
<div>
            <h1 style={{ fontSize: "70px", marginTop: "30px", marginBottom: "100px" }}>
                AUDI
            </h1>
            <Row>
               <Main />

                <Col>
                    <dl className="dictionary">{Audi_detail.map(createEntry)}</dl>

                </Col>

            </Row>


</div>

        </>
    )
}



export default Audi