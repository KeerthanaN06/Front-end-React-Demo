import  express  from "express";
import {MongoClient} from 'mongodb';
import {ObjectId} from "mongodb";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//import { JsonWebTokenError } from "jsonwebtoken";
const app=express();
const url='mongodb+srv://keerthananarasiman06:KeerthanaMongo@cluster0.d2owmzq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const client=new MongoClient(url);
await client.connect();
console.log("MOngo db connected successfulyy");
app.use(express.json());
app.use(cors());
const auth=(req,res,next)=>{
try {
  const token=req.header("backend-token"); //keyname
  jwt.verify(token,"secretkey");
  next();
} catch (error) {
  res.status(401).send({message:error.message});
}
}
app.get("/",function(req,res) {
res.status(200).send("Hello world");
})
app.post("/post",async function(req,res){ // express.json() - middle ware to check 
  const getPostman=req.body;
  const sendMethod=await client.db("CRUD").collection("data").insertOne(getPostman);
  res.status(201).send(sendMethod);
})
app.post("/postmany",async function(req,res){
 const getPostmanMany=req.body;
 const sendMethod=await client.db("CRUD").collection("data").insertMany(getPostmanMany);
 res.status(201).send(sendMethod);
})
app.get("/get",auth,async  function(req,res){
  const getMethod=await client.db("CRUD").collection("data").find({}).toArray();
  res.status(200).send(getMethod);
})
app.get("/getone/:id",async function(req,res){
  const {id}=req.params;
  const getMethod=await client.db("CRUD").collection("data").findOne({_id:new ObjectId(id)});
  res.status(200).send(getMethod);
  console.log(id);
})

app.put("/update/:id",async function(req,res){
  const {id}=req.params;
  const getPostman=req.body;
  const updatemethod=await client.db("CRUD").collection("data").updateOne({_id:new ObjectId(id)},{$set:getPostman});
  res.status(201).send(updatemethod);
  
})
app.delete("/delete/:id",async function(req,res){
  const {id}=req.params;
  const deletemethod=await client.db("CRUD").collection("data").deleteOne({_id:new ObjectId(id)});
  res.status(200).send(deletemethod);
})

app.post("/register",async function(req,res){
  const {username,email,password}=req.body;
  const userfind=await client.db("CRUD").collection("private").findOne({email:email});
  if(userfind)
  {
    res.status(400).send("user already exist")
  }
  else
  {
    const salt=await bcrypt.genSalt(10);
    const hashedPass=await bcrypt.hash(password,salt);
    const registerMethod=await client.db("CRUD").collection("private").insertOne({username:username,email:email,password:hashedPass});
    console.log(hashedPass);
    res.status(200).send(registerMethod);
  }
  //
  //console.log(userfind);
})
app.post("/login",async  function(req,res)
{
  const {email,password}=req.body;
  const userfind=await client.db("CRUD").collection("private").findOne({email:email});
if(userfind)
{
const mongodbpass=userfind.password;
const passCheck=await bcrypt.compare(password,mongodbpass);// first postman passw ,sec mongodb pass
if(passCheck)
{
 const token=jwt.sign({id:userfind._id},"secretkey"); // jwt token:secretkey
 res.status(200).send({token:token})
}
else{
  res.status(400).send("Invalid password");
}
console.log(passCheck);
}
else{
  res.status(400).send("invalid email.id");
  console.log("false");
}
  console.log(email,password);
})
app.listen(4005,()=>{
  console.log("Server connected successfully");
})