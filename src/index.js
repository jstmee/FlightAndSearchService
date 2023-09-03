// import express (after npm install express)
const express=require("express");

const bodyParser=require("body-parser");

const {PORT}=require('./config/serverConfig');

const ApiRoutes=require('./routes/index');

const db=require('./models/index');


// an anonymous arrow function for starting server
const setupAndStartServer=async()=>{

    //create express object
    const app=express();
    
    // parse application/json
    app.use(bodyParser.json());

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use('/api',ApiRoutes);

    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        }
    });



}

setupAndStartServer();