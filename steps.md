- src/
     - index.js // server 
     - models/ 
     - controllers/ 
     - middlewares/ 
     - services/ 
     - utils/ 
     - config/ 
     - respository/ 
- tests/ [later] 
- static/ 
- temp/

# steps 1 (completed)
- install the necessary package:
 - body-parser
 - express
 - nodemon

# step 2 (completed)
- using express create server at some port.

# step 3 (completed)
- write scripts in package.json for nodemon
"start":"npx nodemon src/index"

# step 4 setup the environment (completed)
- for this install npm dotenv package to make .env file for making port.
- make .env file outside src and assign value example port=3000.
- make config file for accessing port from dotenv process.

# step 5 setup the body parser(completed)

# step 6 seting up the orm tools
- sequalize(orm map model into object oriented model for mysql for mysql,sql server ,postgre etc.)
- sequalize cli (set up all the database configurations.)
- mysql2 (help in connecting with mysql server.)
- install all this packages
- in root folder do the npx sequelize init it create   folder move all the thing in src.
- in config write the password and database name.
- to create a database npx sequelize db:create

# step 7 build the models
  - airplane table
    - id
    - model number
    - capacity
  - flight
    - id
    - departure city id
    - arrival city id
    - airplane id
    - departure time
    - arrival time
    - flight number
  - airport
    - id
    - name
    - city_id
    - address
  - city
    - id
    - name

  - airplane 1 to many flight
  - city    1 to many       airport
  - airport 1 to many flight

  - for creating a model command is npx sequelize model:generate --name City --attributes name:String
  - it created model class city and add migration change every thing as required as per need.
  - then run npx sequelize db:migrate it run the migration file and create tables according ot migration files and alo undo it using different command.

  # step 8 make city repo,city service and citycontroller api

  # step 9 setup the routings
  - user of routes folder and routing.

  # step 10 association in api models i.e relationship
    ## Tables

      ### City -> id, name, created_at, updated_at
      ### Airport -> id, name, address, city_id, created_at, updated_at
          Relationship -> City has many airports and Airport belongs to a city (one to many)
    - to create a model airport `npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer`
    - then setup the association in both model class in association field.
    - and also to the migration file.
    - the do the command `npx sequelize db:migrate`
    - how to create a seeder file for popualting the data
     `npx sequelize seed:generate --name add-airports`
    - all the datas in that file and do the command `npx sequelize db:seed:all`

    - wht is db syncronization?
     cities with other association table help in getting this.
     in .env write SYNC.DB:true
     `
     const db=require('./models/index');
     if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        }
  
   `
# step 11  task
    -  expose an api to that can add multiple cities in one go(maybee pass an array in request body,no loop at all).
    - write a crud for airport.
    - add an api in city resources for getting all the airport of the city.

# step 12 
  - airplane modelNumber,capacity
  - build airplane model `npx sequelize model:generate --name Airplane --attributes modelNumber:String,capacity:integer` 
  - seed airplane model
  - flights 
  - build flight model `npx sequelize model:generate --name Flight --attributes flightNumber:String,airplaneId:integer,departureAirportId:integer,arrivalAirportId:integer,arrivalTime:Date,departureTime:Date,price:integer,boardingGate:String,totalSeats:integer`

  

    





