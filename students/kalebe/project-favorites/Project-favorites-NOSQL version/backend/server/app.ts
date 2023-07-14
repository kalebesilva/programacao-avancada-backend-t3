import express from "express";
import { connectToDatabase } from "../services/database.service"
import  favoritesRouter  from "../routes/favorite.router";
import {env} from "../env/env"
import { loadEnv } from '../env/env';
import cors from "cors";

const app = express();
app.use(cors());

loadEnv();

connectToDatabase()
    .then(() => {
        app.use(favoritesRouter);

        app.listen(env.PORT, () => {
            console.log(`Server started at http://localhost:${env.PORT}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });