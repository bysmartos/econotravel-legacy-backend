import {Router} from 'express';
import experienciasController from '../controller/experienciasController';
import { Response, Request } from "express";

const router = Router();

router.get('/experiencias', experienciasController.getExperiencias)
router.post('/experiencias/insert', experienciasController.postExperiencia)
export default router;