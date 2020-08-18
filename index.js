const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Teste CI/CD with Google Build and deploy to Google Run')
})

app.listen(3000, () => console.log('APP Running At Port #3000'));