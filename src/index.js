import express from "express";
import empleadosRoutes from "./routes/empleados.routes.js";
import indexRoutes from "./routes/index.routes.js";


const app = express();
const port = 3000;
const api = '/api';
app.use(express.json());

app.use(api, indexRoutes);
app.use(api, empleadosRoutes);
app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
    setTimeout(() => {
        next.send('api/empleados');
    }, 3000);
})

app.listen(port);
console.log(`servidor corriendo en puerto ${port}`);