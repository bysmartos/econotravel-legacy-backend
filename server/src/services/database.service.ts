import {Pool} from 'pg';
import {config } from './config'

const connectionString = config()

console.log(connectionString)



const connection=(str:string,value:string[])=> {
   const pool = new Pool({
      connectionString
   })

return pool.query(str, value)  


}



export default connection;






// CODIGO QUE FUNCIONA
// import {Pool} from 'pg';
// import {config } from './config'

// const connectionString = config()

// console.log(connectionString)

// const pool = new Pool({
//    connectionString
// })


// export default pool;

// TERMINA CODIGO QUE FUNCIONA


// import {config as dotenv} from 'dotenv';

// dotenv();

// console.log(process.env.PG_HOST)
// console.log(process.env.PG_URL)
