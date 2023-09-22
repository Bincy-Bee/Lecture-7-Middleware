const express = require("express");
const auth = require("./middleware");

const app = express();

app.use(express.json());

let user = [{name : "Bhavin Patel"}, {course: "Backend"}]

app.use(auth);

app.get("/", (req,res)=>{
    res.send("Welcome to Middelware")
});

app.get("/login",auth, (req,res)=>{
    console.log(req.body);
    res.send(user);
})

app.listen(8090, ()=>{
    console.log("Server is listen on port : http://localhost:8090");
})