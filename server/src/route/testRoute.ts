import {Router} from 'express';
import testController from '../controller/testController';

const router = Router();

router.get('/test', testController)

export default router;