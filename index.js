import express from "express"
import dotenv from "dotenv"
const app=express();

dotenv.config({
    path:"./.env",
})
const port=process.env.PORT;


app.get("/",(req,res)=>{
    res.send("hello world");
})

app.get("/login",(req,res)=>{
    res.send('<h1> loggedin to akhil.dev</h1>')
})

const githubtObj={
  "message": "Not Found",
  "documentation_url": "https://docs.github.com/rest",
  "status": "404"
}

app.get("/logs",(req,res)=>{
    res.json(githubtObj);
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
})