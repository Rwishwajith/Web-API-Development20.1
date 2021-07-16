const express = require('express');
const authenticationHandler = require ("./Middlewares/authentication"); //link the authentication
const loggerHandler = require("./Middlewares/logger");
const app = express();

app.use(express.json()); //Parse JSON objects in req
app.use(authenticationHandler);
app.use(loggerhandler);

//middleware creation
app.use((req, res, next ) => {
    console.log("Middleware 1 is executing.....");
    next();
});

app.use((req, res, next ) => {
    console.log("Middleware 2 is executing.....");
    res.send();
});
let beararry = [
    {id:1,name = 'Black bear', type =  'American', place = 'North America'},
    {id:2,name = 'Polar bear', type =  'White', place = 'North Pole'},
    {id:3,name = 'Asian bear', type =  'Back bear', place = 'Indian'}

]
app.get("/", (req,res) => {
res.send("Hello World");

});

app.get("/api/bears", (req, res) => {
    let bears =['Black bear', 'polar bear', 'American Bear'];
    res.send(bears);
});

app.get("/api/bears/:bearId", (req, res) => {
    let bearId = req.params.bearId;
    let bear = beararry.find(b => b.id == bearId);
    if (!bear)
    {
        return res.status(404).send("Given ID Does not exist");
    }
    res.send(bear);
});

app.listen(3000);
console.log(" Node Express is runnig");