import mongoose from "mongoose";

// ! Creamos Esquema (la descripcion de como va a hacer nuestro documento de Mongo)

const ProductosEsquema = mongoose.Schema(
    
    {
        nombre: {
            type: String,
            require: true
        },
        precio: Number,
        stock: Number,
        categoria: String,
        foto: String,
        descripcion: String,
        instalacion: Boolean
    },

    {
        timestamps: true,
        versionKey: false
    }

)

export default ProductosEsquema

