import { Response, Request } from "express";
import connection from "../services/database.service";
import reservasModel from "../model/reservasModel";
import iReserva from "../model/interfaces/iReserva";


const reservaController={ 

    getReservas: async (req:Request,res:Response)=>{
        const reser: any= await reservasModel.getReservas()
        res.json(reser)
 
 },


}

export default reservaController;