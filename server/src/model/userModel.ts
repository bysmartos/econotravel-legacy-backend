import iUser from "./interfaces/iUser";
import {iUserLogin} from "./interfaces/iUserLogin"; //cuando import default no hace falta llaves
import connection from "../services/database.service";

class User {
    
    async saveUser(user:iUser){
        const queryStr = "INSERT INTO users (email, password, name, last_name, role) VALUES ($1,$2,$3,$4,$5) RETURNING *"
        const client:any= await connection(queryStr,[user.email, user.password, user.name, user.last_name, user.role] as string[]);
        //const result = await client.query(queryStr, values);
        return client.rows[0];
    }
    async getUser(user:iUserLogin){
        const queryStr = 'SELECT * FROM "users" WHERE email = $1'
        const client = await connection(queryStr,[user.email]);//middleware comprueba la password
        return client.rows[0];
    }
    async getAllUsers(){
        const queryStr = "SELECT * FROM users"
        const client:any= await connection(queryStr,[]);
        return client.rows;
    }

    async getRole(user:iUserRole){
        const queryStr = 'SELECT role FROM "users" WHERE email = $1'
        const client = await connection(queryStr,[user.email]);
        return client.rows[0];
    }

}
import { iUserRole } from "./interfaces/iUserRole";

export default new User();