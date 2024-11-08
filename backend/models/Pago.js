const mongoose = require("mongoose")

const pagoSchemma = new mongoose.Schema({
    id_pago: {type: Number, required: true},
    id_factura: {type: mongoose.Schema.Types.ObjectId, ref: 'Factura', required: true},
    fecha_pago: {type: Date, default: Date.now}
    id_medioPago: {
        type: mongoose.Schema.Types.ObjectId, ref:'Medio_Pago', required: true
    }
})

module.exports = mongoose.model('Pagos', pagoSchemma)