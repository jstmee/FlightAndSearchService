- src/
     index.js // server 
     models/ 
     controllers/ 
     middlewares/ 
     services/ 
     utils/ 
     config/ 
     respository/ 
- tests/ [later] 
- static/ 
- temp/

#steps 1 (completed)
1.install the necessary package:
-body-parser
-express
-nodemon

#step 2 (completed)
1.using express create server at some port.

#step 3 (completed)
1.write scripts in package.json for nodemon
"start":"npx nodemon src/index"

#step 4 setup the environment (completed)
1.for this install npm dotenv package to make .env file for making port.
2.make .env file outside src and assign value example port=3000.
3.make config file for accessing port from dotenv process.

#step 5 setup the body parser(completed)

#step 6 seting up the orm tools
-sequalize(orm map model into object oriented model for mysql for mysql,sql server ,postgre etc.)
-sequalize cli (set up all the database configurations.)
-mysql2 (help in connecting with mysql server.)
1.install all this packages
2.in root folder do the npx sequelize init it create folder move all the thing in src.
3.in config write the password and database name.
4.to create a database npx sequelize db:create




