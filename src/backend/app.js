const express = require('express');
const app = express();
const getShows = require('./shows');

app.get('/', (req, res) => res.send('Hello'));

app.get('/rest/shows', (req, res) => res.send(getShows()));

app.listen(3001, () => console.log(`Example app listening on port 3001!!!!`));