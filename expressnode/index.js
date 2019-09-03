const  express = require('express');
const app  = express();

app.get('/' , function(req,  res) {
  res.sendFile(__dirname + "/html/index.html");
});

app.get('/sobre', function(req , res) {
 res.sendFile(__dirname + "/html/sobre.html");
} )

app.get('/blog', function(req , res ) {
  res.sendFile(__dirname  + "/html/blog.html");
})


// Get com parametros
app.get('/ola/:cargo/:nome' , function(req , res) { 
  res.send("<h1>Olá" + req.params.nome + 
  "</h1>" + "<h3> Seu cargo eh:" + 
  req.params.cargo + "</h3>");
  res.send()
})

app.listen(8081 , function() {
console.log('Servidor rodando na url http://localhost:8081/');
});