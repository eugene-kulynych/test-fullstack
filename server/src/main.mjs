import dotenv from 'dotenv';
import express from 'express';
import userRoutes from './routes/userRoutes.mjs';
import projectsRoutes from "./routes/projectsRoutes.mjs";
import cors from 'cors';
import { mongoDBClient } from "./clients/mongoClient.mjs";

dotenv.config({path: '../.env'})

const PORT = process.env.PORT || 5000;

mongoDBClient.connect();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', projectsRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

