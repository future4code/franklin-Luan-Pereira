import express, { Response, Request } from 'express';
import app from "./app";
import connection from "./connection";


app.post("/user", async(req: Request, res:Response) => {
  try { 
    const {name, nickname, email} = req.body

    if(!name || !nickname || !email){
      throw new Error("Por favor, preencha todos os dados")
    }
    await connection("TodoListUser")
    .insert({
      id: Date.now().toString(),
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email, 

    }).into("TodoListUser")
    res.status(200).send('Cadastrado com sucesso')
    
  } catch (error: any) {
    res.status(501).send(error.message)
  }
})

app.put("/user/edit/:id", async (req: Request, res: Response) => {
    try {
    const id:string = req.params.id
    const result = await connection("TodoListUser")
      .update(req.body)
      .where("id", id)
    res.send("Alterado com sucesso")
  } catch (error: any) {
    res.status(501).send(error.message)
  }
})

app.get("/user/:id", async(req: Request, res: Response) => {
    try {
      const id:string = req.params.id
      const result = await connection("TodoListUser")
        .select()
        .where("id", id)
      res.status(200).send(result)
    } catch (error: any) {
      res.status(501).send(error.message)
    }
    })

app.post("/task", async (req: Request, res: Response) => {
  try {
    const {title, description, limitDate, creatorUserId} = req.body
    const correctDate:string = limitDate.split('/').reverse().join("-")
    if(!title || !description || !limitDate || !creatorUserId){
      throw new Error("Por favor, preencha todos os dados")
    }
    await connection("TodoListUser")
      .insert(
        {
          "title": title,
          "description": description,
          "limitDate": correctDate,
          "creatorUserId": creatorUserId 
        }
      )
      .into("Task")
      res.status(201).send("Tarefa cadastrada!")
  } catch (error: any) {
    res.status(501).send(error.message)
  }
})

app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await connection("Task")
      .select("Task.id as taskId", "Task.title", "Task.description", "Task.limitDate", "Task.status", "Task.creatorUserId", "TodoListUser.nickname")
      .from('Task')
      .join("TodoListUser", "Task.creatorUserId", "TodoListUser.id")
      .where("Task.id", id)
    res.status(201).send(result)
  } catch (error:any) {
    res.status(501).send(error.message)
  }
})