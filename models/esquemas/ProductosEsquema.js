import mongoose from "mongoose";

// ! Creamos Esquema (la descripcion de como va a hacer nuestro documento de Mongo)

const ProductosEsquema = mongoose.Schema({
    nombre: String,
    precio: Number,
    stock: Number,
    categoria: String,
    foto: String,
    descripcion: String,
    instalacion: Boolean
})

export default ProductosEsquema
