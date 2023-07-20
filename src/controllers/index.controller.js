import { pool } from "../db.js";

const ping = async (req, res) => {
    const [respuesta] = await pool.query('SELECT "pong" AS result ');
    res.json(respuesta[0]);
}

export { ping }