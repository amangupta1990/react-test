//server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const userRoute = require("./feature/user/userRoute")
let app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../../build')));

app.use('/api/user',userRoute)



app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../build', 'index.html'));
});

app.listen(port, _=> console.log(`The server is listening on port ${port}`));