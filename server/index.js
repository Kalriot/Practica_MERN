import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import cors from "cors";

const app = express();

// Resuelve la ubicación del directorio actual
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(`Current directory: ${__dirname}`);

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use(indexRoutes);
app.use(taskRoutes);

// Archivos estáticos
app.use(express.static(join(__dirname, "../client/dist")));

// Puerto dinámico (Render usa el puerto definido en PORT o asigna uno automáticamente)
const port = PORT || 3000;

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
