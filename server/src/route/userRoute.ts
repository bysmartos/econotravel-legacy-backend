import Router from 'express';
import userController from '../controller/userController';
//import encryptPassword from '../middleware/auth';
const router = Router();

router.post('/user/register',userController.saveUser);
router.get('/user/all',userController.getAllUsers);

export default router;