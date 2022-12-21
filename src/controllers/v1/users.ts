import { getUser } from "../../operations/v1/users/get/get-user";
import { Context } from "koa"
import compose from "koa-compose"

export const me = compose([
    async (ctx: Context) => {
      console.log('getUser');
      const result = await getUser.execute({
        userId: 111,
        deviceId: "testDeviceId"
      });
      console.log(result);
      ctx.body = result;
    },
  ])