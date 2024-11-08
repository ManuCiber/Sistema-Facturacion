const mongoose = require("mongoose")

const M_PagoSchema = new mongoose.Schema({
    id_medioPago: {type: String, required: true},
    nombre: {type: String, required: true}
})

module.exports = mongoose.model('Medios_Pago', M_PagoSchema)