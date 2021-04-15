const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.route('/about/mission')
    .get((req, res) => {
        res.render('pages/about');
    })
    .post((req, res) => {
        res.send('This is the application home page with post request');
    })
    .put((req, res) => {
        res.send('This is the application home page with put request');
    });

app.listen(3000, () => {
    console.log('Server listening in port 3000');
});
