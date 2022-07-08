//import { query } from "express";
//import users from "../data/users";
import iUser from "./interfaces/iUser";
import connection from "../services/database.service";

class User {
    async saveUser(user:iUser){
        const queryStr = "INSERT INTO users (email, password) VALUES ($1,$2) RETURNING *"
        const client:any= await connection(queryStr,[user.email, user.password] as string[]);
        //const result = await client.query(queryStr, values);
        console.log("patata");
        return client.rows[0];
    }
}

export default new User();