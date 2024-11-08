const expres = require('express')
const router = express.Router()
const Cliente = require('../models/Cliente')

/*Para crear un nuevo cliente: */

router.post('/', async (req, res) => {
    try {
        const lv_cliente = new Cliente(req.body)
        await lv_cliente.save()
    } catch (error) {
        res.status(400).send({message: 'Error al Crear Cliente'},error)
    }
})

/*Obtener todos los clientes*/

router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.find()
        res.send(clientes)
    } catch (error) {
        res.status(500).send({message:'Error al obtener clientes', error})
    }
    
})



// router.patch('/:id',async (req, res) => {
//     try {
        
//     } catch (error) {
        
//     }
// })

