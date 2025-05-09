// import express
 const express = require("express");
 const cors = require('cors');
 const {readdirSync} = require("fs");

// initialize express
const app = express();
const dotenv = require("dotenv");
const { connectDB } = require("./db/connection");

dotenv.config();
//port number
const port = process.env.PORT || 5001; 




// handling onnection errors
app.use(cors({origin : process.env.CLIENT_URL}));
app.use(express.json());

connectDB();


// routing : GET ,POST, PUT ,DELETE

app.get("/",(req,res)=>{
    return res.send(`<center><h1> server is running on ${port}</h1></center>`)

});




// dynamically include routes 

readdirSync("./routes").map((route)=> 
    app.use("/api",require(`./routes/${route}`))
);



// listen to port 
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);

});