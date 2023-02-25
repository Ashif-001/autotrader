import React from "react";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
// import Header from "../component/navbarr";
// import Footer from "../component/footer";
// import { Routes, Route, Link } from "react-router-dom";
import Create from "./Create"


function Sign(){
return (<div style={{margin:"10% 0%"}}>
   
    <p style={{color:"grey",fontWeight:"300"}}>Sign in</p>
    <p style={{fontSize:"14px"}}>New here? <Link to="/Create" >Create an account</Link></p>
    {/* <div style={{textAlign:"center",padding:"0px 100px"}}> */}
      <Row style={{width:"35%",marginLeft:"32%",height:"4rem",marginBottom:"25px"}}>  <button style={{borderRadius:"35px", marginBottom:"px", border:"1.5px solid blue",backgroundColor:"transparent"}}>Continue with Facebook</button>  </Row> 
      <Row style={{width:"35%",marginLeft:"32%",height:"4rem",marginBottom:"25px"}}> <button style={{borderRadius:"35px", marginBottom:"px", border:"1.5px solid blue",backgroundColor:"transparent"}}>Continue with Facebook</button>    </Row>
      <Row style={{width:"35%",marginLeft:"32%",height:"4rem",marginBottom:"25px"}}>  <button style={{borderRadius:"35px", marginBottom:"px", border:"1.5px solid blue",backgroundColor:"transparent"}}>Continue with Facebook</button>   </Row>
      <Row style={{width:"35%",marginLeft:"32%",height:"4rem",marginBottom:"25px"}}>  <button style={{borderRadius:"35px", marginBottom:"px", border:"1.5px solid blue",backgroundColor:"transparent"}}>Continue with Facebook</button>   </Row>
        <p style={{fontSize:"14px"}}>By Continuing, you agree to our terms and condition </p>
         {/* </div> */}

   
    </div>

    )
}

export default Sign;