import React, { useEffect } from "react";

import "./stylecalc.css";
function Calc()
{
const[math,setMath]=React.useState('');
const[Physics,setPhy]=React.useState('');
const[Chemistry,setChem]=React.useState('');
const [res,setres]=React.useState('');
const [calculationDone, setCalculationDone] = React.useState(false);

function add()
{
  if(Physics >100 || Chemistry>100 || math>100 ||isNaN(Physics) || isNaN(Chemistry)|| isNaN(math))
  {
   setres("Enter Valid marks");
  }
  else{
 const phy=parseFloat(Physics/2);
 const chem=parseFloat(Chemistry/2);
 const res= phy+chem+parseFloat(math);

 console.log(phy);
 console.log(chem);
 setres(isNaN(res)?0:res);
  }
}


useEffect(() => {
  if (res !== '' && !isNaN(res)) {
    setCalculationDone(true);
  }
}, [res]);

useEffect(() => {
  if (calculationDone) {
    const timeoutId = setTimeout(() => {
      setPhy("");
      setChem("");
      setMath("");
      setCalculationDone(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }
}, [calculationDone])
  return(
    <div className="main">
       <h1>12 th Cutoff Calculator</h1>
       <div className="newdiv">      
    <h2>Enter Maths mark</h2><input type="num"  onChange={(event)=>setMath(event.target.value)}/>
    <br></br>
    <br></br>
    <h2>Enter Physics mark</h2><input type="num"  onChange={(event)=>setPhy(event.target.value)}/>
    <br></br>   <br></br>
    <h2>Enter Chemistry mark</h2><input type="num"  onChange={(event)=>setChem(event.target.value)}/>
    <br></br>   <br></br>
    <h2>Click here to</h2> <button onClick={add}>Calculate</button>
    </div>
    <div className="result-container">
  <h3 className="result-animation">Your Cutoff is: {res}</h3>
</div>

   </div>
  );
}
export default Calc;