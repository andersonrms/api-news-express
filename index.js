const express = require('express');
const axios = require('axios');

const apiKey = 'b15c029b7d5c49aaacfebc24c319cda5';
const api =  axios.create({
  baseURL: "http://newsapi.org/"
});

const server = express();
let newsData;

//QUERY PARAMS = ?q=1
//ROUTE PARAMS = /users

//MIDDLEWARE PARA CONTROLE DE ROTA
server.use((req, res, next) => {
  console.time('Request');
  console.log(`Método: ${req.method}; URL:${req.url};`);

  next();

  console.timeEnd('Request');
})

server.get('/',  (req, res) => {  
  const { search } = req.query;

  api.get(`v2/top-headlines?q=${search}&country=us&apiKey=${apiKey}`).then(
    (response) => {
      console.log(response.data.articles)
      newsData = response.data.articles
    }
  )
  return res.json(newsData)
})


server.listen(3000);