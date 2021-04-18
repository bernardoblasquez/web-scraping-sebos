const puppeteer = require('puppeteer');
const fileSystem = require('fs');


const convertObjectToJsonFile = (fileName, listOfObects) =>{

    const JSONString = JSON.stringify(listOfObects);
    const folderName = 'files'
    const path = `${folderName}/${fileName}.json`

    console.log("Saving list of Book Stores in a JSON file...");

    fileSystem.writeFile( path, JSONString,
        (error) => {
            if (error) console.log(err);
        }
    );

}

const dateSuffix = () =>{
    
    let stringDateSuffix = ''

    const today = new Date();
    const day = today.toLocaleString('en-US', {day: '2-digit'})
    const month = today.toLocaleString('en-US', {month: 'short'})
    const year = today.toLocaleString('en-US', {year: 'numeric'})

    stringDateSuffix = day + "_" + month.toUpperCase() + "_" + year

    return stringDateSuffix
}

const estanteVirtualBot = async() => {

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('https://www.estantevirtual.com.br/garimpepor/sebos-e-livreiros');
    //await page.screenshot({ path: 'images/screenshot.png' });

    console.log("Scraping Book Stores: Estante Vitual");

    const bookStores = await page.evaluate(() => {

        let listOfBookStores = [...document.querySelectorAll(".card.clearfix.js-sebo-item")]

        let bookStore_EstanteVirtual = listOfBookStores.map((bookStore) => {

            let [cityLocation, stateLocation] = bookStore.querySelector(".card-text.js-sebo-local").textContent.split(", ")

            return {
                link: bookStore.querySelector(".clearfix.card-link").href,
                name: bookStore.querySelector(".card-title.sebo-nome.js-sebo-titulo").textContent,
                location: {
                    city: cityLocation,
                    state: stateLocation
                },
                totalOfBooks: bookStore.querySelector(".js-sebo-acervo").textContent
            }
        })

        return bookStore_EstanteVirtual
    }); 

    const fileName = "EV_" + dateSuffix(); 
    convertObjectToJsonFile(fileName, bookStores)

    await browser.close();
}

estanteVirtualBot();










/*
   listaDeSebos =  document.querySelectorAll(".card.clearfix.js-sebo-item")
   linkParaSebo = .clearfix.card-link
   nomeDoSebo = .card-title.sebo-nome.js-sebo-titulo
   localizacaoSebo = .card-text.js-sebo-local
   acervoSebo = .js-sebo-acervo

   take the link href property: .href
    - linkParaSebo = document.querySelectorAll(".clearfix.card-link").href

*/