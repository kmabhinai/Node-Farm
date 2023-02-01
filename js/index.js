const http = require("http");
const url = require("url");
const fs = require("fs");
const replace_temp = require('./../modules/replace-temp');

const card = fs.readFileSync(`${__dirname}/../templates/template-card.html`, "utf-8");
const overview = fs.readFileSync(`${__dirname}/../templates/template-overview.html`, "utf-8");
const temp_product = fs.readFileSync(`${__dirname}/../templates/template-product.html`, "utf-8");

const data = fs.readFileSync(`${__dirname}/../dev-data/data.json`, "utf-8");
const data_obj = JSON.parse(data);

const server = http.createServer((req, res) => {
    console.log(req);
    const { query, pathname } = url.parse(req.url, true);

    //Overview page
    if (pathname == "/" || pathname == "/overview") {
        res.writeHead(200, { 'Content-type': 'text/html' });
        const card_html = data_obj.map((elem) => replace_temp(card, elem)).join('');
        const output = overview.replace("{%Prod_cards%}", card_html);
        res.end(output);
    }

    //Product page
    else if (pathname == "/product") {
        const product = data_obj[query.id];
        const output = replace_temp(temp_product, product);
        res.end(output);
    }

    //API
    else if (pathname == "/api") {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data);
    }

    //Page Not Found
    else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-head': 'Helloo!!'
        });
        res.end("<h1>Page Not Found!!!</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("connected");
});