// import express (after npm install express)
const express=require("express");

// an anonymous arrow function for starting server
const setupAndStartServer=async()=>{

    //create express object
    const app=express();
    const PORT=3000;
    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
    });



}

setupAndStartServer();