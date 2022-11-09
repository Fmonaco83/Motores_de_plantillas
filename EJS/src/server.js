const express = require('express');

const app = express();

const PORT = 8080;

const productos = []

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', '../views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('inicio', { productos });
});

app.post ('/productos', (req, res) => {
    productos.push(req.body);
    console.log(productos);
    res.redirect('/');
});




const server = app.listen (PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});

server.on("error", error => console.log ("error en el servidor", error))