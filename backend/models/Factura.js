const mongoose = require("mongoose")

const facturaSchema = new mongoose.Schema({
    id_cliente: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', requied: true
    }, 
    id_empleado: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Empleado', required: true
    },
    fecha_factura: {
        type: Date, default: Date.now
    },
    itbis_factura: {
        type: Number, default: 0.18
    },
    valor_factura: {
        type: Number, required: true
    },
    estado_factura: {
        type: Number, required: true
    }
})

module.exports = mongoose.model('Factura', facturaSchema)