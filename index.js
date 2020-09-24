const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('hello')
});

const port = 8000;

server.listen(port, () => console.log(`\n == API running on port ${port} == \n`))