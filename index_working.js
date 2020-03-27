const request = require('request');
const cheerio = require('cheerio');
const express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    request('https://store.steampowered.com/search/?filter=weeklongdeals', (error, response, html) => {
        if(!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
            let titles = [];
            $('.title').each((i,ele) => {
                const title = $(ele).text();
                console.log(title);
                titles.push(title);
            });
            res.render('index', { titles });
        }
    })

});

app.listen(8080);
console.log('Express listening on port 8080');