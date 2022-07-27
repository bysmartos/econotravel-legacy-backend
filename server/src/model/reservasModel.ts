import connection from "../services/database.service";
import iReserva from "./interfaces/iReserva";

class Reserva {
  async getReservas() {
    const queryStr =
      "select us.name, us.last_name, exp.titulo from reservas res inner join users us on res.user_id = us.user_id inner join experiencias exp on res.experiencia_id = exp.experiencia_id";
    const query = await connection(queryStr, []);
    return query.rows;
  }

  async postReserva(res: iReserva, userId) {
    const queryStr =
      "insert into reservas (user_id, experiencia_id) values ($2, $1) returning *";
    const query = await connection(queryStr, [
      res.experienciaId,
      userId,
    ] as string[]);
    return query.rows[0];
  }

  async getReservasByUser(userid) {
    const queryStr =
      "select us.name, us.last_name, exp.titulo from reservas res inner join users us on res.user_id = us.user_id inner join experiencias exp on res.experiencia_id = exp.experiencia_id where res.user_id=$1";

    const query = await connection(queryStr, [userid]);

    return query.rows;
  }
}
export default new Reserva();
