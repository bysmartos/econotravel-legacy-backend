import connection from "../services/database.service";
import iExperiencia from "./interfaces/iExperiencia";
import iSearcher from "./interfaces/iSearcher";


class Experiencia{

   async getExperiencias(){
   
        const queryStr = 'SELECT * FROM experiencias'
        const query = await connection(queryStr,[])
        return query.rows;

    }

    async postExperiencia(exp:iExperiencia){
        const queryStr = "INSERT INTO experiencias (titulo, imagen, descripcion, precio, duracionhoras, accesibilidad, ubicacion, transporte, duracion) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *"
        const client: any=await connection(queryStr,[exp.titulo, exp.imagen, exp.descripcion, exp.precio, exp.duracionhoras, exp.accesibilidad,exp.ubicacion, exp.transporte, exp.duracion] as string[]);
        return client.rows[0];

    }

    async updateExperiencia(exp:iExperiencia, id){
        const queryStr = 'UPDATE experiencias SET titulo =$1, imagen=$2, descripcion=$3, precio=$4, duracionhoras=$5, accesibilidad=$6, ubicacion=$7, transporte=$8, duracion=$9 where experiencia_id=$10 returning *' 
        const client:any= await connection(queryStr,[exp.titulo, exp.imagen, exp.descripcion, exp.precio, exp.duracionhoras, exp.accesibilidad,exp.ubicacion, exp.transporte, exp.duracion,id] as string[]);
        //const result = await client.query(queryStr, values);
        return client.rows;


    }

    async deleteExperiencia(id){
        const queryStr = 'DELETE FROM experiencias where experiencia_id=$1';
        const client:any= await connection(queryStr, [id]);
        return client.rows;
    }

    async getOneExperiencia(id){
        const queryStr = 'SELECT * FROM experiencias where experiencia_id=$1'
        const query = await connection(queryStr,[id]);
        return query.rows;
    }

    async postExperienciaFilter(searcher:iSearcher){
        const queryStr = "SELECT * FROM experiencias WHERE titulo ILIKE $1"
         const cadena = '%' + searcher.searcher + '%'
        const query = await connection(queryStr,[cadena]);
        return query.rows;
    }

}

export default new Experiencia();