const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const routerMovie = require('./routes/routes');
app.use(cors());
app.use(routerMovie.routerMovie);

app.use((req, res, next) => {
    res.status(400).send({
        message: "Route not found"
    })
})

server.listen(5000)