import Router from 'express';
import userController from '../controller/userController';
import encryptPassword from '../middlewares/auth';
const router = Router();

router.post('/user', encryptPassword, userController);
router.get('/user', userController); 

export default router;

/*router.post('/user',authHandler.encryptPassword,userController.saveUser);   router.get('/user',validateToken,userController.getAllUsers); */