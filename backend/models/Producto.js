const mongoose = require("mongoose")

const ProductoSchema = new mongoose.Schema({
    id_producto: {type: Number, required: true},
    nombre_producto: {type: String, required: true},
    unidad_medida: {type: String, required: true},
    precio_producto:{type: Number, required: true}
})

module.exports = mongoose.model('Producto', ProductoSchema)