
import iUser from "./interfaces/iUser";
import iUserLogin from "./interfaces/iUser"
import connection from "../services/database.service";

class User {
    
    async saveUser(user:iUser){
        const queryStr = "INSERT INTO users (email, password, name, last_name, role) VALUES ($1,$2,$3,$4,$5) RETURNING *"
        const client:any= await connection(queryStr,[user.email, user.password, user.name, user.last_name, user.role] as string[]);
        //const result = await client.query(queryStr, values);
        //console.log(user.email);
        return client.rows[0];       
    } 
    async getUser(user:iUserLogin){

        const queryStr = 'SELECT * FROM "user" WHERE email = $1'
        const values = [user.email, user.password]
        const client = await connection(queryStr,[user.email, user.password] as string[]);
        //const result = await client.query(queryStr, values);
        //console.log(user.email);
        return client.rows[0];
    }
}

export default new User();