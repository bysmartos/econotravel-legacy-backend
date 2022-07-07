import connection from "../services/database.service";


class Experiencia{

   async getExperiencias(){
   
        const queryStr = 'SELECT * FROM experiencias'
        const query = await connection(queryStr,[])
        console.log(query)
        return query.rows;

    }

}

export default new Experiencia();