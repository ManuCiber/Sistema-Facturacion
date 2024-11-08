const mongoose = require('mongoose')

const detalle_ordenSchema = new mongoose.Schema({
    id_orden: {
        type: String, required: true
    },
    nombre_producto:{type: String, required: true},
    cant_Compra: {type: String, required: true}
})

module.exports = mongoose.model('Detalle_Orden',detalle_ordenSchema)