import { Context } from "koa"
import compose from "koa-compose"
import { getUser } from "../../operations/v1/users/get/get-user";

export const me = compose([
    async (ctx: Context) => {
      const result = await getUser.execute({
        userId: 111,
        deviceId: "testDeviceId"
      });
      ctx.body = result;
    },
  ])