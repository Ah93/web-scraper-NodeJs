// import the modules you need for scraping
const rp = require('request-promise');
const cheerio = require('cheerio');

//Define Url that you will scrap from
const siteUrl = 'https://www.worldometers.info/coronavirus/';
arr = []; // an array to store the data

//define the method for collecting the data
const fetchDta = async () => {
    const html = await rp(siteUrl);
    const tableHead = cheerio('#maincounter-wrap', html).
    map(function() {
        arr.push(cheerio(this).html());
    })
    .toArray();
    //console.log(arr);
};

var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/corona', function(req, res) {
	getCountriesData().then(
		value => {
			console.log(arr);
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Credentials', true);
			res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
			res.header(
				'Access-Control-Allow-Headers',
				'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json',
			);
			res.send(arr);
		},
		reason => {
			// rejection
		},
	);
});
app.listen(process.env.PORT || 3012);