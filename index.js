import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import "./App.css"
//  ReactDOM.render(<Secondclspep/>,document.getElementById("root"));
 
 //import "./style2counter.css";
// const myelement= <Parentform/>
 function geti()
 {
   return(
  <App/>
   )
  
 }
const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<App/>);