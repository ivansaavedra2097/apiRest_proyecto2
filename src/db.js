import { createPool } from "mysql2/promise";

const pool = createPool({
    host: 'localhost',
    user: 'localuser_1',
    password: '123456',
    database: 'empresa_proyecto2',
    port: 3306
});

export { pool }