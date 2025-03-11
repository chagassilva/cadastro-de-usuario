


import express from "express"
import { PrismaClient } from "@prisma/client" 
import cors from "cors"

const prisma = new PrismaClient()



const app = express()
app.use(express.json())
app.use(cors())



app.get("/usuarios", async (req, res) => {

const Users2 = await prisma.user.findMany()


        res.status(200).json(Users2)

        
 })


 // Criando um usuário no banco de dados

 app.post("/usuarios", async (req, res) => {


   const Users = await prisma.user.create({
    
    data:{

        name: req.body.name,
        age: parseInt(req.body.age),
        email: req.body.email

    }

    })

  
    res.status(201).json({Users})

 
})

// Criando um usuário no banco de dados



// Criando um usuário no banco de dados

app.put("/usuarios/:id", async (req, res) => {

       const Users = await prisma.user.update({

        where:{
           
            id: req.params.id
        },
        
        data:{
    
            name: req.body.name,
            age: parseInt(req.body.age),
            email: req.body.email
    
        }
    
        })
    
       
        res.status(200).json({Users})
    
     
    })

    // Criando um usuário no banco de dados


    // Criando um usuário no banco de dados

    app.delete("/usuarios/:id", async (req, res) =>{

      await prisma.user.delete({


        where:{

            id: req.params.id


        }

        })

        res.status(200).json({message:"Usuário deletado com sucesso"}) 

    })

    // Criando um usuário no banco de dados


app.listen(3000)



// // endereco so servidor http://localhost:3000/
// // req = request (requisição)
// // res = response (resposta)


// //import cors from "cors"

// const app = express()
// app.use(express.json())

// // app.use(cors())

// const users = []

// app.get("/usuarios", (req, res) => {


//     res.send("Hello World")
//     res.status(200).json(users)
    
// })


// // app.post("/usuarios", (req, res) => {

// //     users.push(req.body)
// //     res.status(201).json({message:"Usuário criado com sucesso"})
    
// //     //console.log(req.body)
// // })

// app.listen(3000)


