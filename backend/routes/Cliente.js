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

/*Actualizar el Cliente*/

 router.patch('/:id',async (req, res) => {
     try {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!cliente){
            return res.status(404).send({message: 'Cliente no encontrado'})
        }
        res.send(cliente)
     } catch (error) {
        res.status(400).send({message: 'Error al actualizar cliente'})
     }
})

/*Para eliminar un cliente*/

router.delete('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findOneAndDelete(req.params.id)
        if(!cliente){
            return res.status(404).send({message: 'Cliente no encontrado'})
        }
        res.send(cliente)
    } catch (error) {
        res.status(500).send({message: 'Error al eliminar Cliente'})
    }
})

module.exports = router