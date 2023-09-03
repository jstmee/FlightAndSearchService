const express = require('express');
const router = express.Router();

const v1ApiRoutes=require('./v1/index');


//when v1 comes map it with v1apiroutes
router.use('/v1',v1ApiRoutes);


module.exports=router;
