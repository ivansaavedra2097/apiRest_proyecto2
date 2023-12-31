import express from "express";
import empleadosRoutes from "./routes/empleados.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();
const api = '/api';
app.use(express.json());

app.use(api, indexRoutes);
app.use(api, empleadosRoutes);
app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    });
});

export default app;