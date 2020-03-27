const request = require('request');
const cheerio = require('cheerio');

request('https://store.steampowered.com/search/?filter=weeklongdeals', (error, response, html) =>{
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);

        const titleHeading = $('.title');
        const h2Header = $('.page_content');
        //console.log(titleHeading.html()); //finds html element
        //console.log(titleHeading.text()); // finds the texts inside the html element

      // const output = h2Header.find('h2').text(); //finds text in element within element
      // const output = h2Header.children('h2').text(); //finds text in element within element 
      //const output = h2Header.children('h2').next().text(); //finds the next text in element 
      //const output = h2Header.children('h2').parent().text(); //finds h2 text and the next text 

      $('.title').each((i,ele) => {
          const title = $(ele).text();
          console.log(title);
      });

      
 
    }
})