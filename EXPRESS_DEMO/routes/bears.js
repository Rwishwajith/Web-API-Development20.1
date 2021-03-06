const express = require('express');
const router = express.Router();
app.use('api/bears', bears);

let beararry = [
    {id:1,name = 'Black bear', type =  'American', place = 'North America'},
    {id:2,name = 'Polar bear', type =  'White', place = 'North Pole'},
    {id:3,name = 'Asian bear', type =  'Back bear', place = 'Indian'}

];

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

module.exports - routers;