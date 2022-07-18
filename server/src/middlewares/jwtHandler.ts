import { NextFunction, Request, Response } from "express";
import {secret}  from '../services/config';
import jwt, { JwtPayload } from 'jsonwebtoken';
import userModel from "../model/userModel";

const generateToken = (payload: JwtPayload) => {
    return jwt.sign(payload, secret)
}

const getTokenFrom = (request: Request) => {
    const authorization = request.get('authorization');
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7);
    } else {
        return null;
    }
}

const tokenVerify = (token: string) => jwt.verify(token, secret);

const validateTokenRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token: string | null = getTokenFrom(req);
        let email: any = tokenVerify(token);
        const result = await userModel.getRole({email});//validar por role
        console.log(result.role)
        if (!token || result.role!='admin') {
            throw new Error ('token invalid or missing!');
        }
         else {
            next()
        }
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}

export default {
    generateToken,  validateTokenRole
}


