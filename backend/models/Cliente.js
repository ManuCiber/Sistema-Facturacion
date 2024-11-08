const mongoose = require("mongoose")

const clienteSchema = new mongoose.Schema({
    id_cliente: {type: String, required: true},
    nombre_cliente: {type: String, required: true},
    apellidos_cliente:{type: String, required: true},
    identidad_cliente: {type: String, required: true, unique: true},
    tel_cliente: {type: String, required: true, match:/^[0-9]+$/},
    correo_cliente:{type: String, required: true, match: /.+\@.+..+/}
})

module.exports = mongoose.model('Cliente', clienteSchema)