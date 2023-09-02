// import express (after npm install express)
const express=require("express");

const {PORT}=require('./config/serverConfig');

// an anonymous arrow function for starting server
const setupAndStartServer=async()=>{

    //create express object
    const app=express();

    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
    });



}

setupAndStartServer();