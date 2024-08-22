const express = require('express');
const app = express();
const port = 3009;
const cors = require('cors');
const axios = require('axios');

app.use(express.json());
app.use(cors())


const token = 'tokenmtfoda';
const baseUrl = 'http://localhost:8888';

app.use('/', require('./routes/Router'));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
