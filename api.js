const axios = require('axios');

const apiKey = 'b15c029b7d5c49aaacfebc24c319cda5';
const api =  axios.create({
  baseURL: "http://newsapi.org/"
});