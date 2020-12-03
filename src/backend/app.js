const express = require('express')
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')

//Limpia mi pantalla
console.clear()

// modulo multer para procesar imagenes...

const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middleware
// morgan se utiliza para visualizar en consola las peticiones de HTTP, status like 200,404 etc
app.use(morgan('dev'))

// multer es un modulo para procesamiento de imagenes
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file, cb) => {
    // cb=call back
    cb(null, new Date().getTime() + path.extname(file.originalname))
  }
})
app.use(multer({ storage }).single('image'))

// ESTE ES UN NUEVO COMENTARIO ....


// express.urlencode se configura para indicarle a express que las peticiones o informacion
// que llega desde un cliente, nos va a llegar en un formato json.
app.use(express.urlencoded({ extended: false }))

// esta configuracion sirve para indicarle a express que seamos capaces de entender el
// envio y recepcion de informacion en formato json.
app.use(express.json())


// jajajajaja ----------  registro de CONTACTOS --------- mario
app.post('/', (req, res) => {
  // actualizar la base de datos
  console.log(req.file.path)
  console.log(req.body.nombre)
  console.log(req.body.apellidos)
  console.log(req.body.email)
  res.status(200)
})


app.get('/texto.txt', (req, res) => {
  var opt = {
    root: path.join(__dirname, 'public')
  }
  res.sendFile('texto.txt', opt)
})


// routes
app.use('/api/contactos', require('./routes/contactos'))




// Static Files...
// indicamos a nuestro servidor que muestre por defecto en localhost:3000 un archivo
// html
app.use(express.static(path.join(__dirname, 'public')))



// starting server
app.listen(app.get('port'), () => {
  console.log('Server running on port:', app.get('port'))
})