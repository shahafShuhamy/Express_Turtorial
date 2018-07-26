//this will be base page for GW2 Daily API server.
//the app will go to gw2 API and fetch dailys with a default key.
//nodemon indx.js -e js,hbs
const express = require('express');
const ats = require('./access_token');
const hbs = require('hbs');

const app = express();


app.set('view-engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () =>{
    return new Date().getFullYear()
});

//maintenence Patch 
// app.use((req, res, next) => {
//     res.render('maintenence.hbs')
// });

app.get('/todalies',(req, res) =>{
    var url = ats.baseURL+ats.achivements+ats.daily+'?'+ats.P_access_token;
    res.send(url);
    //get List of all Dailys TODAY and will return a JSON format.
});

app.get('/',(req, res) =>{
    res.render('error.hbs',{
        title:'Error page'
    });
});

app.get('/home',(req, res) =>{
    res.render('home.hbs',{
        title:'Home page'
    });
});

app.listen(3000);