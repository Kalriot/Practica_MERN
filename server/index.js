import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import {fileURLToPath} from "url";
import {dirname,join} from "path";
import cors from "cors";

const app = express();
const __dirname=dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
app.use(cors(
    {
        origin:"http://localhost:4000"
    }
));
app.use(express.json());
app.use(indexRoutes);
app.use(taskRoutes);
app.use(express.static(join(__dirname,'../client/dist')));

app.listen(PORT);
console.log(`Server running on port ${PORT}`);
