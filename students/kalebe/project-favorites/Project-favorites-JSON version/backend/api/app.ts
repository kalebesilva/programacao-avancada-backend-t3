import express, { Request, Response } from 'express';
import myRouters from './routers';
import cors from 'cors';


const app = express();

app.use(cors());

app.use(express.json());


app.use(myRouters);

app.listen(3000, () => {
  console.log("Backend API Running");
});
