const express = require('express')
const app = express();
const port = 3000;
// const bodyParser = require('body-parser');
const path = require('path');

// app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})