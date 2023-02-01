const http = require("http"); 
const url = require("url");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/data.json`,"utf-8");
const data_obj = JSON.parse(data);

const server = http.createServer((req,res)=>{
    // res.end("Hii!!!!!!!");
    if(req.url =="/" || req.url =="/abc"){
        res.end("abc");
    }else if(req.url=="/abhi"){
        res.end("abhi");
    }else if(req.url=="/api"){

        // fs.readFile(`${__dirname}/data.json`,"utf-8",(err,data)=>{
        //     const prod_data = JSON.parse(data)
        //     res.writeHead(200,{'Content-type':'application/json'});
        //     res.end(data);
        // });
        
        res.writeHead(200,{'Content-type':'application/json'});
        res.end(data);
    }else{
        res.writeHead(404,{
            'Content-type' : 'text/html',
            'my-own-head' : 'Helloo!!'
        })
        res.end("<h1>Page Not Found!!!</h1>")
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("connected");
});