import { me } from "../controllers/v1/users"
import { get } from "../controllers/v1/posts"
import Router from 'koa-router';

const router = new Router({ prefix: '/v1' })

router.post('/users/me', me);
router.get('/posts/get', get);

export const v1Routes = router.routes()