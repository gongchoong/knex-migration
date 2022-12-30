import express from 'express';

const app = express();
const port = Number(process.env.PORT ?? 8080);

app.get('/', (req, res) => {
  res.send('Koa Test!!!');
});

app.listen(port, () => console.log(`Express is listening at http://localhost:${port}`));