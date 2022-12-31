/* eslint-disable @typescript-eslint/no-var-requires */
import Koa from 'koa';
import logger from 'koa-logger';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import { v1Routes } from './routes/v1';

const app = new Koa();
const port = Number(process.env.PORT ?? 8080);
const dbSetup = require('./db-setup');

app.use(json());
app.use(logger());
app.use(bodyParser());

app.use(v1Routes);

dbSetup();

app.listen(port, () => console.log(`Express is listening at http://localhost:${port}`));