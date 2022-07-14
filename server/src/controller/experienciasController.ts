
import { Response, Request } from "express";
import connection from "../services/database.service";
import experienciasModel from "../model/experienciasModel";
import iExperiencia from "../model/interfaces/iExperiencia";


const experienciasController={

    getExperiencias: async (req:Request,res:Response)=>{
        
       const exp: any= await experienciasModel.getExperiencias()
       res.json(exp)

},

postExperiencia:async (req:Request,res:Response)=>{
    try{
        const {titulo, imagen, descripcion, precio, duracionhoras, accesibilidad, ubicacion, transporte, duracion, ...experiencias}:iExperiencia = req.body;
        if(!titulo || !imagen || !descripcion|| !precio|| !duracionhoras|| !accesibilidad|| !ubicacion|| !transporte|| !duracion){
            res.status(400).json({message:'some info is missing'});
        }else{
            const result = await experienciasModel.postExperiencia({titulo, imagen, descripcion, precio, duracionhoras, accesibilidad, ubicacion, transporte, duracion, ...experiencias});
            result
                    ? res.status(201).json({ result: result.rows})
                    : res.status(500).send('No se pudo crear una nueva experiencia');
        }
    }catch (error: any){
        res.status(400).send(error.message);
    }
},

updateExperiencia: async (req:Request,res:Response)=>{
    try{
        const param = req.params['id'];
        const {titulo, imagen, descripcion, precio, duracionhoras, accesibilidad, ubicacion, transporte, duracion, ...experiencias}:iExperiencia = req.body;
         if( !titulo || !imagen || !descripcion|| !precio|| !duracionhoras|| !accesibilidad|| !ubicacion|| !transporte|| !duracion){
             res.status(400).json({message:'some info is missing'});
         }
        const result = await experienciasModel.updateExperiencia({titulo, imagen, descripcion, precio, duracionhoras, accesibilidad, ubicacion, transporte, duracion, ...experiencias}, param);
        result
                ? res.status(201).json({ result: result.rows})
                : res.status(500).send('No se pudo crear una nueva experiencia');
    }catch (error: any){
        res.status(400).send(error.message);
    }
},

deleteExperiencia: async (req:Request,res:Response)=>{
    try{
        const param = req.params['id'];
        const result = await experienciasModel.deleteExperiencia(param);
        result
                ? res.status(201).json({ result: `Experiencia deleted with ID: ${param}`})
                : res.status(500).send('No se pudo borrar una nueva experiencia');
    }catch (error: any){
        res.status(400).send(error.message);
    }
},

getOneExperiencia: async (req:Request,res:Response)=>{
    try{
        const param = req.params['id'];
        const result = await experienciasModel.getOneExperiencia(param);
        result
                ? res.status(201).json(result)
                : res.status(500).send('No se pudo borrar una nueva experiencia');
    }catch (error: any){
        res.status(400).send(error.message);
    }
}
}
export default experienciasController;




//CODIGO QUE FUNCIONA
// import { Response, Request } from "express";
// import pool from "../services/database.service";

// const experienciasController={

//     getExperiencias:  async (req:Request,res:Response)=>{
//        const exp= await pool.query('select * from experiencias')
//        res.json(exp.rows)

// }
// }

// export default experienciasController;


// import { Response, Request } from "express";

// import {Pool} from  'pg';

// const pool=new Pool({
//     host:'localhost',
//     user:'postgres',
//     password:'1234',
//     database:'econotravel-personal',
//     port:5432
//  });


// const experienciasController={

//     getExperiencias:  async (req:Request,res:Response)=>{
//        const exp= await pool.query('select * from experiencias')
//        res.json(exp.rows)

// }
// }

// export default experienciasController;