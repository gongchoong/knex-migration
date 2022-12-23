import { users } from "../controllers/v1/index"
import Router from 'koa-router';

const router = new Router({ prefix: '/v1' })

router.post('/users/me', users.me);

export const v1Routes = router.routes()