const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const errorHandler 
= require('./middleware/errorHandler')

dotenv.config()
const app = express()
app.use(bodyParser.json())

/*Database Conection*/

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true, 
    useUnifiedTopology:true
})
.then(()=>console.log('MongoDB Conectado'))
.catch(err=> console.error(err))


/*Acá se importan las rutas:*/

const ClientRoute = require('./routes/clientes')

/*Use Routes*/
app.use('/api/clientes')

/*Miidleware para manejo de errores*/
app.use(errorHandler)

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})