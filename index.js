const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/myPortfolio')));

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'dist/myPortfolio/index.html'));
})

http.createServer(app).listen(process.env.PORT || 4200);

