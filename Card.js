import React from "react";
import Contactinfo from "./contactinfo";
function Card(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img className="rounded" src={props.img} alt="dummyalt" />
      </div>
      <div>
        <h2 className="name">{props.name}</h2>
       <Contactinfo itemlab="phone" itemval={props.phone}/>
       <Contactinfo itemlab="email" itemval={props.email}/>
      </div>
    </div>
  );
}
export default Card;


