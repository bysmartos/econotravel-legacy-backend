import { Response, Request } from "express";
import connection from "../services/database.service";
import reservasModel from "../model/reservasModel";
import iReserva from "../model/interfaces/iReserva";


const reservaController={ 

    getReservas: async (req:Request,res:Response)=>{
        const reser: any= await reservasModel.getReservas()
        res.json(reser)
 
 },
 
 getReservasByUser:  async (req:Request,res:Response)=>{
    const param = req.params['userid'];
    const reser:any = await reservasModel.getReservasByUser(param);
    res.json(reser);
},

    postReserva: async (req:Request,res:Response)=>{
        try{
            const param = req.params['userid'];
            const {experienciaId,...reservas}:iReserva = req.body;
            if(!experienciaId){
                res.status(400).json({message:'some info is missing'});
            } else{
            const result = await reservasModel.postReserva({experienciaId}, param);
            result
                    ? res.status(201).json({ result: result.rows})
                    : res.status(500).send('No se pudo crear una nueva experiencia');
        }}catch (error: any){
            res.status(400).send(error.message);
        }

}
}

export default reservaController;