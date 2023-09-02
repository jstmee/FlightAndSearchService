// import express (after npm install express)
const express=require("express");

const bodyParser=require("body-parser");

const {PORT}=require('./config/serverConfig');

// an anonymous arrow function for starting server
const setupAndStartServer=async()=>{

    //create express object
    const app=express();
    
    // parse application/json
    app.use(bodyParser.json());

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));

    

    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
    });



}

setupAndStartServer();