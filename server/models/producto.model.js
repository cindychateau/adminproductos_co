const mongoose = require("mongoose");

//Información que va dentro de colección
const EsquemaProducto = new mongoose.Schema({
    nombre: String,
    precio: Number,
    descripcion: String
}, { timestamps: true, versionKey:false });
//Timestamps crea los campos de createdAt y updatedAt
//versionKey:false elimina el atributo _v

//Colección
const Producto = mongoose.model("productos", EsquemaProducto);

module.exports = Producto;