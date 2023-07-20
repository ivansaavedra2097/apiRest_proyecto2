import { pool } from '../db.js';

const getEmpleados = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM empleados');
        res.json(rows);
    } catch {
        return res.status(500).json({
            message: 'Algo salio mal'
        });
    }
};

const getEmpleado = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM empleados WHERE id_empleado= ?', [req.params.id]);
        if(rows.length <= 0) return res.status(404).json({
            message: 'Empleado no encontrado'
        });
        res.json(rows[0]);
    } catch {
        return res.status(500).json({
            message: 'Algo salio mal'
        });
    }
}

const createEmpleado = async (req,res) => {
    const { name, salary } = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO empleados (nombre_empleado, salario_empleado) VALUES (?,?)', [name, salary]);
        console.log(req.body);
        res.send({
            id: rows.insertId, 
            name,
            salary
         });
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal'
        });
    }
};

const updateEmpleado = async (req,res) => {
    try {
        const { id } = req.params;
        const { name, salary } = req.body;
        const [result] = await pool.query('UPDATE empleados SET nombre_empleado= IFNULL(?, nombre_empleado), salario_empleado= IFNULL(?, salario_empleado) WHERE id_empleado=?', [name, salary, id]);
        if(result.affectedRows === 0) return res.status(404).json({
            message: "empleado no encontrado"
        });
        const [row] = await pool.query('SELECT * FROM empleados WHERE id_empleado=? ', [id]);
        res.json(row[0]);
    } catch {
        return res.status(500).json({
            message: 'Algo salio mal'
        });
    }
};

const deleteEmpleado = async (req,res) => {
    try {
        const [rows] = await pool.query('DELETE FROM empleados WHERE id_empleado= ? ', [req.params.id]);
        if(rows.affectedRows <= 0) return res.status(404).json({
            message: 'Empleado no encontrado'
        });
        res.sendStatus(204);
    } catch {
        return res.status(500).json({
            message: 'Algo salio mal'
        });
    }
};

export { getEmpleados, createEmpleado, updateEmpleado, deleteEmpleado, getEmpleado }