import {config as dotenv} from 'dotenv';

dotenv();

console.log(process.env.PG_HOST)
console.log(process.env.PG_URL)

export const config = ()=>{
    const uri= process.env.PG_URL;
    console.log(uri)
    return uri;
}