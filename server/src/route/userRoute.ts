import Router from 'express';
import userController from '../controller/userController';
import auth from '../middlewares/auth';
const router = Router();

router.post('/user/register', auth.encryptPassword, userController.saveUser);
router.get('/user/all',userController.getAllUsers);

export default router;

/*router.post('/user',authHandler.encryptPassword,userController.saveUser);   router.get('/user',validateToken,userController.getAllUsers); */