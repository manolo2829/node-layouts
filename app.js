const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')


//seteamos nuestro motor de plantillas
app.set('view engine', 'ejs')
//aca definimos donde va a buscar los estilos y todo
app.use(express.static('public'))

app.use(expressLayouts)

app.get('/', (req, res) => {
    res.render('inicio')
})

app.get('/contacto', (req, res) => {
    res.render('contacto')
})

app.listen(3000, () => {
    console.log('Server UP en http://localhost:3000')
})