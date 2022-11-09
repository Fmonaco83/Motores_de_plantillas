const express = require('express');
const pug = require('pug');

const app = express();

app.set('views', '../views');

app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const personas = []

app.get('/', (req, res) => {
    res.render('formulario', { personas });
});

app.post ('/personas', (req, res) => {
    personas.push(req.body);
    console.log(personas);
    res.redirect('/');
});















const PORT = 8080;
const server = app.listen (PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});

server.on("error", error => console.log ("error en el servidor", error))

