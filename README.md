# PragmaBrewery_beers_truck

A system to monitor beers containers temperature. 

This application simulates a refrigerated truck responsible for delivery beer. Every beer has a specific minimum and maximum temperature that have to be respected to guarantee its quality. It is important to verify the containers' temperature because every time that the truck's doors are open the containers' temperature goes up.

So this application shows the containers measured temperature and inform if that is getting to close to the maximum temperature.

### Technical Details

- JavaScript
- nodeJS
- EJS
- Express
- Consign 
- MySQL

## Starting Application

### Generating the database

The script to generate and populate the application database is at **dbcreate.sql** file.

### Run the application

``` node app.js ```

## Improvements

- Develop a interface to insert new containers.
- Develop a interface to insert new beers.
- Insert a button to remove the containers that were delivered.
- Auto generate the application documentation.
