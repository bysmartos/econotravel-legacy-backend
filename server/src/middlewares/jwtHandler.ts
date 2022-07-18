import { NextFunction, Request, Response } from "express";
import {secret}  from '../services/config';
import jwt, { JwtPayload } from 'jsonwebtoken';
import userModel from "../model/userModel";

const generateToken = (payload: JwtPayload) => {
    return jwt.sign(payload, secret)
}

export default {
    generateToken
}