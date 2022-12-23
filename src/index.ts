
import Koa from 'koa';

import logger from 'koa-logger';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import { v1Routes } from './routes/v1';
import { Model } from "objection";

/* eslint-disable @typescript-eslint/no-var-requires */
const knex = require('knex');
const knexfile = require('./database/knexfile');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = knex(knexfile.local) // eslint-disable-line new-cap

const app = new Koa();
const port = Number(process.env.PORT ?? 8080);

app.use(json());
app.use(logger());
app.use(bodyParser());

app.use(v1Routes);
console.log('DB connection initialized')
Model.knex(db)

app.listen(port, () => console.log(`Koa is listening at http://localhost:${port}`));
