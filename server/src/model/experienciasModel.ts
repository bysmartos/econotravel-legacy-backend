import connection from "../services/database.service";
import iExperiencia from "./interfaces/iExperiencia";


class Experiencia{

   async getExperiencias(){
   
        const queryStr = 'SELECT * FROM experiencias'
        const query = await connection(queryStr,[])
        console.log(query)
        return query.rows;

    }

    async postExperiencia(exp:iExperiencia){
        const queryStr = "INSERT INTO experiencias (titulo, imagen, descripcion, precio, duracionhoras, accesibilidad, ubicacion, transporte, duracion) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *"
        const client: any=await connection(queryStr,[exp.titulo, exp.imagen, exp.descripcion, exp.precio, exp.duracionhoras, exp.accesibilidad,exp.ubicacion, exp.transporte, exp.duracion] as string[]);
        return client.rows[0];

    }

}

export default new Experiencia();