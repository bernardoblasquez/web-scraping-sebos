const puppeteer = require('puppeteer');
const fileSystem = require('fs');


const convertObjectToJsonFile = (fileName, listOfObects) =>{

    const JSONString = JSON.stringify(listOfObects);
    const folderName = 'files'
    const path = `${folderName}/${fileName}.json`

    fileSystem.writeFile( path, JSONString,
        (error) => {
            if (error) console.log(err);
        }
    );

}

const bookStoreBot = async(url) => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(url);
    //await page.screenshot({ path: 'images/screenshot.png' });

    console.log("Scraping Book Stores: Estante Vitual");

    const bookStores = await page.evaluate(() => {

        let listOfBookStores = [...document.querySelectorAll(".card.clearfix.js-sebo-item")]

        let bookStore_EstanteVirtual = listOfBookStores.map((bookStore) => {

            let bookStoreLocation = bookStore.querySelector(".card-text.js-sebo-local").textContent.split(", ")

            return {
                link: bookStore.querySelector(".clearfix.card-link").href,
                name: bookStore.querySelector(".card-title.sebo-nome.js-sebo-titulo").textContent,
                location: {
                    municipio: bookStoreLocation[0],
                    estado: bookStoreLocation[1]
                },
                totalOfBooks: bookStore.querySelector(".js-sebo-acervo").textContent
            }
        })

        return bookStore_EstanteVirtual
    }); 

    console.log("Saving list of Book Stores in a JSON file...");
    convertObjectToJsonFile('listaSebos_EstanteVirtual', bookStores)

    await browser.close();
}

bookStoreBot('https://www.estantevirtual.com.br/garimpepor/sebos-e-livreiros');










/*
   listaDeSebos =  document.querySelectorAll(".card.clearfix.js-sebo-item")
   linkParaSebo = .clearfix.card-link
   nomeDoSebo = .card-title.sebo-nome.js-sebo-titulo
   localizacaoSebo = .card-text.js-sebo-local
   acervoSebo = .js-sebo-acervo

   take the link href property: .href
    - linkParaSebo = document.querySelectorAll(".clearfix.card-link").href

*/