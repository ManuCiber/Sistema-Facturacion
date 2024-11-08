const mongoose = require("mongoose")

const empleadoSchema = new mongoose.Schema({
    id_empleado: {type: String, required: true},
    nombre_empleado: {type: String, required: true},
    apellido_empleado: {type: String, required: true},
    identidad_empleado: {type: String, required: true},
    puesto: {type: String, required: true},
    sueldo: {type: String, required: true}    
})

module.exports = mongoose.model('Empleado', empleadoSchema)