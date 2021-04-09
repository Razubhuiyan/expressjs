const express = require('express');


const app = express();

const router = express.Router({
    caseSensitive: true
});
//app.use(express.json());
//app.use(express.raw());
//app.use(express.text());
//app.use(express.urlencoded());
//app.use(express.static(`${__dirname}/public/`, {
//    index: "index.html"
//}));

app.use(router);

router.get('/about', (req, res) => {
    res.send("This is the home page");
})

router.post('/', (req, res) => {
    //console.log(req.body);
    res.send("This is home page with post request");
});



app.listen(3000, () => {
    console.log("Server listening in port 3000");
});