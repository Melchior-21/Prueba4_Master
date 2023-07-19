const express = require('express')
const app = express()
es6Renderer = require('express-es6-template-engine'),


app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

//Router
// app.get('/index',(request , response)=>{
//     response.render('index');
// })
const router = require('./routes/route')
app.use('/',router)

app.post('/getFullName',(request , response)=>{
    response.json({
        nombre: "Melchior Saint-Preux",
        direccion: "Placilla Nuevo casa 9",
        ciudad: "Valparaíso"
    })
})

//server listen
app.listen(3000,() =>{
    console.log('Escuchando en el puerto 3000')
})