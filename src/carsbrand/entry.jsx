import React from "react";

function Entry(props) {
  return (
    <div className="term">
      
        <span className="img1" role="img">
          {props.Images}
        </span>
        <p11 >{props.name}</p11><br/>
        <p11>{props.class}</p11><br/>
        <p11>{props.type}</p11><br/>
        <p11>{props.seats}</p11><br/>
        <p11>{props.engine}</p11><br/><hr/>
        <p11>New from {props.price}</p11><br/>


    
    </div>
  );
}
export default Entry;