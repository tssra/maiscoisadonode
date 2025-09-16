const express = require('express') //colocou o pacote no projeto

const app = express()

const port = 5000

const path = require('path') //consegue utilizar tudo que o módulo do node faz nessa variável
const caminho = path.join(__dirname, "views") //o join pega e junta duas coisas

app.get("/home", (req,res) => {
  res.status(200) //enviar os status
  res.sendFile(`${caminho}/index.html`)
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

app.use((req,res) => {
    res.status(404) //status que deu erro
    res.sendFile(`${caminho}/404.html`)
})

//bagulho do pokemon
app.get("/pokemon", () => {
    res.status(200)
    res.send("Charizard")
})

app.get("/", (req,res) => {
    res.status(200).send("olá, parabéns!")})