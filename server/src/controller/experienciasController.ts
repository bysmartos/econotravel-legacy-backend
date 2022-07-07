
import { Response, Request } from "express";
import connection from "../services/database.service";
import experienciasModel from "../model/experienciasModel";


const experienciasController={

    getExperiencias:  async (req:Request,res:Response)=>{
        
       const exp: any= await experienciasModel.getExperiencias()
       res.json(exp)

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