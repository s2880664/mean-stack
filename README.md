# mean-stack

Simple comicbook webapp built using MEAN fullstack Javascript framework  + RESTful API

## Requirments

* MongoDB (3.2)
* Node.js (Latest)
* Bower (Latest)

## How to run

1. Install development environment requirements listed in previous section.
2. Clone or download project.
3. Navigate to project root folder.
4. Install NPM packages ``` npm install ```
5. Start MongoDB process. (Run mongod.exe)
6. Populate database by running 'populateDatabase.js' file located in root directory of project. ``` node populateDatabase.js ```
7. Start server with node.js by running 'server.js' file located in root directory of project. ``` node server.js ```
8. Access webapp with prefered browser via localhost and port 3000 ``` http://localhost:3000/ ```

## Features
### RESTful API (JSON)

The API can be accessed via HTTP.
The API provides access to CRUD operations as defined in [this](http://www.restapitutorial.com/lessons/httpmethods.html) specification.

e.g. ``` http://localhost:3000/api/comics ```

* ``` /api/comics ``` Retrieve all comic records
* ``` /api/comics/:comicId ``` Retrieve single comic record by ID
* ``` /api/comics/title/:comicTitle ``` Retrieve single comic by Title
* ``` /api/comics/search/:comicSearch ``` Retrieve all comics where 'title' or 'description' contain comicSearch sting

### Validation

Validation is provied both on the server via Mongoose; as well as the client side via Angular.

### Single Page App (SPA)

The front end is a SPA built using Angular.

## Packages used:

 * [MongoDB](https://www.mongodb.com/)
 * [ExpressJS](https://github.com/expressjs/express)
 * [Angular](https://github.com/angular/angular)
 * [Node.js](https://github.com/nodejs/node)
 * [Bower](https://github.com/bower/bower)
 * [ejs](https://github.com/tj/ejs)
 * [mongoose](https://github.com/Automattic/mongoose)
 * [body-parser](https://github.com/expressjs/body-parser)
