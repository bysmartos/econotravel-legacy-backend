import { Response,Request,NextFunction, request } from "express";
import bcrypt from 'bcrypt';
import userModel from "../model/userModel";
 const hashingPassword = (password:string)  => {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
}
const encryptPassword = async (req:Request,res:Response,next:NextFunction)=>{//next si esta bien pasa a la siguiente funcion
    try {
        if(req.body.password===undefined){
            res.send('password missing');
        } else {
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(req.body.password,saltRounds);
        req.body.password = passwordHash;
        next();}
    } catch (error) {
        res.status(500).send('internal error');
    }
}
const validateUser = async (req, res, next)=>{
    try {
        // obtiene email y password de la request.
        const {email,password} =req.body;
        if(!email || !password){
           throw new Error(' email or password not exist');
        }
        // llama a la bbdd recupera email y password
        const result = await userModel.getUser({email,password});
        // compara la password de la request con la password de la bbdd
        const comparePassword = await bcrypt.compare(password, result.password);
        if(comparePassword){
            // si todo va bien llama a next()
            next();
        } else {
            // si va mal respuesta código 400 las passwords no coinciden
            throw new Error('password not valid');
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
export default {encryptPassword, validateUser, hashingPassword};

/*import { Response,Request,NextFunction, request } from "express";
import bcryptjs from 'bcryptjs';
import userModel from "../model/userModel";

export const encryptPassword = async (req:Request,res:Response,next:NextFunction)=>{

    try {
        if(req.body.password!==undefined){
            res.send('password missing');
        } else {
        const saltRounds = 10;
        const passwordHash = await bcryptjs.hash(req.body.password,saltRounds);
        req.body.password = passwordHash;
        next();}

    } catch (error) {
        res.status(500).send('internal error');
    }
}

/*export const validateUser = async (req:Request, res:Response, next:NextFunction)=>{
    
    try {
        //obtiene email y password de la request.
        const {email,password}=req.body;
        if(!email || !password){
            res.status(400).send('user or password');
        }
        const result = await userModel.getUser({email,password})
        //compara
        const comparePassword = await bcryptjs.compare(password,saltRounds);
        if (comparePassword) {
            next();
            req.body.password = passwordHash;
        }
        }

    } catch (error) {
        res.status(500).send('internal error');
    }


    /*obtiene email y password de la request.
    llama a la bbdd recupera email y password
    compara la password de la request con la password de la bbdd
    si todo va bien llama a next()
    si va mal respuesta código 400 las passwords no coinciden*/
//}

//export default {encryptPassword, /*validateUser*/};
//export default encryptPassword;
