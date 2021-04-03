const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send("This is the home page");
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send("This is home page with post request");
});



app.listen(3000, () => {
    console.log("Server listening in port 3000");
});