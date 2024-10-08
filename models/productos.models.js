import mongoose from "mongoose"
import ProductosEsquema from "./esquemas/ProductosEsquema.js"

// ! Modelo Mongoose
const ProductosModelo = mongoose.model('productos', ProductosEsquema)


const obtenerTodos = async ()  => {

    try {
        const productos = await ProductosModelo.find()
        //  console.log(productos)
        return productos
    } catch (error) {
        throw error
    }

}

const obtenerUnProducto = async (id)  => {

    try {
        const producto = await ProductosModelo.findById(id)
        // console.log(producto)
        return producto
    } catch (error) {
        throw error
    }

}

const crearProducto = async (producto)  => {

    try {
         const productoCreado = await ProductosModelo.create(producto)
         // console.log(productoCreado)
         return productoCreado
    } catch (error) {
        // console.log('[crearProducto]', error)
        throw error // lanzo el error hacia arriba, hacia la funcion que este usando esta funcion.
    }

}

const updateProducto = async (id, productoPorEditadar)  => {

    try {
        const options = { new: true }
        const productoYaEditado = await ProductosModelo.findByIdAndUpdate(id, productoPorEditadar, options)
        // console.log(productoYaEditado)
        return productoYaEditado
    } catch (error) {
        throw error // lanzo el error hacia arriba
    }

}

const deleteProducto = async (id)  => {

    try {
        const productoBorrado = await ProductosModelo.findByIdAndDelete(id)
        // console.log(productoBorrado)
        return productoBorrado
    } catch (error) {
        throw error
    }

}

export default {
    obtenerTodos,
    obtenerUnProducto,
    crearProducto,
    updateProducto,
    deleteProducto
}
