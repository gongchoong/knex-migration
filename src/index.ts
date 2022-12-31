/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';

const app = express();
const port = Number(process.env.PORT ?? 8080);
const dbSetup = require('./db-setup');

dbSetup();

app.get('/', (req, res) => {
  res.send('Koa!!!');
});

app.listen(port, () => console.log(`Express is listening at http://localhost:${port}`));