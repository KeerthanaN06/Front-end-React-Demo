

function create(){
  

  validate : (values)=>{
    let error={};
    if(values.color === "")
    {
      error.color="Please Enter color";
    }
    return error;
  }
}