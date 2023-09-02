
//requiring the dotenv module for accessing values in .env file
const dotenv=require('dotenv');

dotenv.config();

//exporting values
module.exports={
    PORT:process.env.PORT
}