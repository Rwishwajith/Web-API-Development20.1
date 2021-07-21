const express = require('express');
const authenticationHandler = require ("./Middlewares/authentication"); //link the authentication
const loggerHandler = require("./Middlewares/logger");
const bears = require("./routers/bears");
const app = express();

app.use(express.json()); //Parse JSON objects in req
app.use(authenticationHandler);
app.use(loggerhandler);
app.use('api/bears', bears);

//middleware creation
app.use((req, res, next ) => {
    console.log("Middleware 1 is executing.....");
    next();
});

app.use((req, res, next ) => {
    console.log("Middleware 2 is executing.....");
    res.send();
});

app.get("/", (req,res) => {
res.send("Hello World");

});

app.listen(3000);
console.log(" Node Express is runnig");