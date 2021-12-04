const { request, response } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
});

app.get("/stringExample", (req, res) => {
  res.json({"string":"this is an example string from the backend node.js server"})
});

// app.get("/torontoWeather", (req, res) => {
//   axios.get("http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=17e443ff35a9b00d00d9f98d295acc9f")
//   .then(myres => res.json(myres.data))
//   })
// ;