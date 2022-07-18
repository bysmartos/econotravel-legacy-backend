import {Router} from 'express';
import reservasController from '../controller/reservasController';
import { Response, Request } from "express";
import jwtHandler from '../middlewares/jwtHandler';


const router = Router();

router.get('/reservas', jwtHandler.validateTokenRole, reservasController.getReservas);


export default router;