const express = require('express');

// express app

const app = express();
app.set('view engine', 'ejs');
// listen for request
app.listen('3000');

app.get('/', (req, res) => {
    // res.send('<h1>this is the home page</h1>');
    // res.sendFile('./html/home.html', {root: __dirname});
    res.render('home');
});
app.get('/about', (req, res) => {
    //   res.send('<h1>this is the about page</h1>');
    // res.sendFile('./html/about.html', {root: __dirname});
    res.render('about');
});

// app.get('/about-us', (req, res) => {
//     //   res.send('<h1>this is the about page</h1>');
//     res.render('home');
//     res.redirect('/about');
    
// });
// 404 page

// use is for middleware

app.use((req, res) => {
    res.status(404).sendFile('./html/404.html', {root: __dirname});
    res.render('404');
});