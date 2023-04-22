import cors from "cors";
import express, { Request, Response } from "express";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes)
app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});


