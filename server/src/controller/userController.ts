import {Request,Response} from 'express';
import iUser from '../model/interfaces/iUser';
import userModel from '../model/userModel';
import jwt from '../middlewares/jwtHandler';
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

}
export default userController;
/*
const userController = async (req: Request, res: Response) => {

    try {
        const { email, password, ...user } = req.body as iUser;
        if (!email || !password) {
            res.status(400).send('missing some data');
        } else {
            const result:QueryResult = await userModel.saveUser({ email, password, ...user });

            result
                /*? res.status(201).json({result: result.rows})
                : res.status(500).send("Failed to create a new user.");
        }
    } catch (error: any) {

        res.status(400).send(error.message);
    }
}
*/

