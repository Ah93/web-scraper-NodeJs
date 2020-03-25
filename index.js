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
    console.log(arr);
}
fetchDta();

const express = require('express');
const app = express();
const port = 3055;

app.get('/', (req, res) => {
	fetchDta();
	res.send(arr);
});

app.listen(process.env.PORT || 3055, () => console.log(`Example app listening on port ${port}!`));