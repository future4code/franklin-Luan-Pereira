import express, { Request, Response } from "express"
import cors from "cors"

const app = express()
// Essa api nao vai ter o erro de cors
app.use(cors())

// Nesse backEnd, os dados serão mandados para o frontEnd, no formato JSON
app.use(express.json())
app.use(cors())
//app.method(path,handler)  path-> get, post, put etc     handler-> request, response e arrow function

type userAccount = {
    name: string,
    birthDay: Date,
    cpf: string,
    transactions: userTransactions[]
}

type userTransactions = {
    value: number,
    date: Date,
    balance: number
}

let users: userAccount[] = [
    {
        name:'Luan Wallace',
        birthDay: new Date(1995, 4, 26),
        cpf:'14903558787',
        transactions: [
            {
                value: 5000,
                date: new Date(2021, 3, 1),
                balance: 25000
            },
            {
                value: 2000,
                date: new Date(2021, 3, 4),
                balance: 23000
            }
        ]
    },
    {
        name:'Luiz Carlos',
        birthDay: new Date(1984, 4, 3),
        cpf:'16203458777',
        transactions: [
            {
                value: 2000,
                date: new Date(2022, 3, 2),
                balance: 3080
            },
        ]
    }
]

app.get("/usuarios", (req, res) => {
    res.send(users);
  });

app.post("/novo-usuario", (req: Request, res: Response) => {
    const today = new Date()
    // ou poderia desestruturar um por um
    const newUser: userAccount = req.body
    const birth = new Date(newUser.birthDay)
    const userAge = today.getFullYear() - birth.getFullYear()

    if(userAge < 18){
        res.status(404).send("Infelizmente você não poderá ter sua conta criada. Apenas para maiores de 18 anos")
    } else {
        users.push(newUser)
        res.status(200).send("Boaa! Acabamos de criar sua conta")
    }

})



//estou escutando uma porta com numero 3003 e com uma callback mostrando qual porta
app.listen(3003,()=>{
    console.log('servidor esta rodando na porta localhost:3003')
})