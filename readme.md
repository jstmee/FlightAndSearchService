
# Welcome to flight service

## Project setup
 - Clone the project on local
 - Execute `npm install` on the same path as of your root directory of teh downloaded project.
 - Create a `.env` file in the root directory and add the following environment variable .
    - `PORT=3000`
 - Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

 ```
 {
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

 ```

 - Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate` and `npx sequelize db:migrate undo ` fo undo migration.

 ## db design
  - airplane table
  - flight
  - airport
  - city



