
import Koa from 'koa';

import logger from 'koa-logger';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import { v1Routes } from './routes/v1';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { Client } = require('pg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

// export const client = new Client({
//     user: 'postgres',
//     host: 'postgres',
//     database: 'sample_db',
//     password: 'postgres',
//     port: 5432
//   })

// const connectDb = async () => {
//   try {
//     await client.connect()
//   } catch (error) {
//     console.log(error)
//   }
// }


const app = new Koa();
const port = Number(process.env.PORT ?? 8080);

app.use(json());
app.use(logger());
app.use(bodyParser());

app.use(v1Routes);
// connectDb();

app.listen(port, () => console.log(`Koa is listening at http://localhost:${port}`));
