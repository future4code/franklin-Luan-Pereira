// import { Request, Response } from "express";
import cors from "cors";
import express, { Request, Response } from "express";
import routes from "./routes";

// const express = require('express')
// const app = express()
// const port = 3003

// app.get('/', (req, res) => {
//   res.send('Hello loan de bequi')
// })


const app = express();
app.use(express.json());
app.use(cors());
app.use(routes)
app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

// app.get("/",(req:Request, res:Response) => {
//     res.send("Luan de bequi")
// })
