const express = require('express') //colocou o pacote no projeto

const app = express()

const port = 5000

const path = require('path') //consegue utilizar tudo que o módulo do node faz nessa variável
const caminho = path.join(__dirname, "views") //o join pega e junta duas coisas

const userRoutes = require("./routes/userRoutes") //importa as rotas do usuário

//interpretador de json, pra tratar as informações do body
app.use(express.urlencoded({extended:true}))
app.use(express.json())






app.use("/usuarios", userRoutes) //cria uma rota principal para as sub rotas de usuário

//definindo o ejs como template engine
app.set('view engine', 'ejs')

app.set("views",path.join(__dirname, "views")) //definindo 'atalho' onde buscar as views


//rota de página inicial
app.get("/home", (req,res) => {
  res.status(200) //enviar os status
  res.render("index")
})

//subir o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

//rota pra quando acessar uma rota que não existe
app.use((req,res) => {
    res.status(404) //status que deu erro
    res.render("404")
})

//bagulho do pokemon
// app.get("/pokemon", () => {
//     res.status(200)
//     res.send("Charizard")
// })

//rota inicial do projeto
app.get("/", (req,res) => {
    res.status(200).send("olá, parabéns!")})