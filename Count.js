import React from "react";
function Count(){
const [count,setcount]=React.useState(0);
console.log(count);
  return(
    <div className="container">
      <div className="increamentBox">
    <h2>My counter</h2>
    <h2>{count}</h2>
    <button onClick={()=>{setcount(count+1)}}>Increment</button>
    </div>
    </div>
  );
}
export default Count;