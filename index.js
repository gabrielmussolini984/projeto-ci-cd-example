const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World Teste2')
})

app.listen(3000, () => console.log('APP Running At Port #3000'));