const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static("."));
app.use(function (request, response) {
    response.sendFile(__dirname + '/game.html');
});

app.listen(PORT);
console.log(`http://localhost:${PORT}/`);
