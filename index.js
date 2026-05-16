// O arquivo index.js é o arquivo principal do projeto

const express = require("express");

const app = express();

// configurando o ejs
app.set('view engine', 'ejs')

//definindo a pasta public para arquivos estaticos
app.use(express.static('public'))

// rota principal
app.get("/", function(req, res) {
    res.render("index")
})

// rota perfil
app.get("/perfil", function(req, res) {
    res.render("perfil")
})

// rota clientes sem parâmetro
app.get("/clientes", function(req, res) {
  ;

    res.render("clientes", {
      clientes : clientes,
      listaClientes : listaClientes
    })
})
// rota clientes com parâmetro
app.get("/clientes/:cli", function(req, res) {
  const clientes = req.params.cli
    res.render("detalhesClientes", {
      clientes:clientes
    })
})

// rota produto sem parâmetro

app.get("/produtos", function(req, res) {
  const mercadoria = "", produto = ""
  const listaProdutos = ['Computador','Celular', 'Tablet', 'Notebook'];
      
  res.render("produtos", {
    mercadoria : produto,
        listaMercadorias : listaProdutos
      })
})

// rota produtos com pârametro
app.get("/produtos/:prod", function(req, res) {
  const produto = req.params.prod
    res.render("detalhesProdutos",{
      mercadoria: produto
    });
});

app.get("/servicos", function(req, res) {
  

//ARRAY DE OBJETOS
const servicos = [
  

]
 res.render("servicos", {
  servicos : servicos 
 });
})
// iniciando servidor
const port = 8080;
app.listen(port, function(error) {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!")
  } else {
    console.log(`Servidor iniciado com sucesso: http://localhost:${port}`)
  }
})

