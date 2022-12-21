
import { Context } from "koa"
import compose from "koa-compose"

export const get = compose([
    async (ctx: Context) => {
      console.log('getPost');
      const result = ctx.request.body;
      ctx.body = result;
    },
  ])