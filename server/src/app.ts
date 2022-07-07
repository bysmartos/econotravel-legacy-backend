import express, {Request,Response} from 'express';
import {experienciasRoute} from './route';

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(experienciasRoute);



app.get('/',(req:Request,res:Response)=>{
    res.json('hello world');
})




export default app;
