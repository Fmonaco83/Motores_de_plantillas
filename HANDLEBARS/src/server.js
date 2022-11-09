const express = require('express');

const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

const productos = []

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', '../views')

app.get('/', (req, res) => {
    res.render('datos', { productos });
});

app.post ('/productos', (req, res) => {
    productos.push(req.body);
    console.log(productos);
    res.redirect('/');
});





















const PORT = 8080;
const server = app.listen (PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});

server.on("error", error => console.log ("error en el servidor", error))