import {Request,Response} from 'express';
import iUser from '../model/interfaces/iUser';
import userModel from '../model/userModel';
import jwt from '../middlewares/jwtHandler';
import iUserPut from '../model/interfaces/iUserPut';
//import { QueryResult } from 'pg';

const userController =  {
    saveUser: async (req:Request,res:Response)=>{
    try{
        const {email,password,name,last_name,role, ...users}:iUser = req.body;
        if(!email || !password || !name || !last_name || !role){
            res.status(400).json({message:'email, password, name, last name or role missing'});
        } else {
            const result = await userModel.saveUser({email,password,name,last_name,role, ...users});
        result
                ? res.status(201).json({ result: result.rows})
                : res.status(500).send('No se pudo crear un nuevo usuario');
        }
        
    }catch (error: any){
        res.status(400).send(error.message);
    }
},

    getAllUsers: async (req:Request,res:Response)=>{
        try{
            const allUsers: any= await userModel.getAllUsers()

            allUsers
                    ? res.status(201).json(allUsers)
                    : res.status(500).send('No se pudo visualizar la lista de usuarios');
            
        }catch (error: any){
            res.status(400).send(error.message);
        }
    },

    login: async (req: Request, res: Response) => {
        const token:any = await jwt.generateToken(req.body.email)
        console.log(token);
        res.json({token});
    },

    updateUser: async (req:Request,res:Response)=>{
        try{
            const param = req.params['id'];
            const {email,password,name,last_name, ...users}:iUserPut = req.body;
            if( !email || !password || !name || !last_name  ){
                res.status(400).json({message:'some info is missing'});
            } else {
                const result = await userModel.updateUser({email,password,name,last_name, ...users}, param);
                result
                        ? res.status(201).json({ result: result.rows})
                        : res.status(500).send('No se pudo modificar  un user');
            }
        }catch (error: any){
            res.status(400).send(error.message);
        }
    }

}
export default userController;
