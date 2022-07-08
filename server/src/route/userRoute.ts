import Router from 'express';
import userController from '../controller/userController';
//import encryptPassword from '../middleware/auth';
const router = Router();

router.post('/user',userController);

export default router;