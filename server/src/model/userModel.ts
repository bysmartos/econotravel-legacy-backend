//import { query } from "express";
//import users from "../data/users";
import iUser from "./interfaces/iUser";
import connection from "../services/database.service";

class User {
    async saveUser(user:iUser){
        const queryStr = "INSERT INTO users (email, password, name, last_name, role) VALUES ($1,$2,$3,$4,$5) RETURNING *"
        const client:any= await connection(queryStr,[user.email, user.password, user.name, user.last_name, user.role] as string[]);
        //const result = await client.query(queryStr, values);
        console.log("patata");
        return client.rows[0];
    }
}

export default new User();