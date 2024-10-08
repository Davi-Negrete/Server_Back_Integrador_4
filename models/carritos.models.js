import CarritosEsquema from "./esquemas/CarritosEsquema.js"
import mongoose from "mongoose"

const CarritosModelo = mongoose.model('carritos', CarritosEsquema)


const crearCarrito = async (carrito) => {

    try {
        
        const carritoCreado = new CarritosModelo({ carrito })
        const carritoGuardado = await carritoCreado.save()

        return carritoGuardado
    } catch (error) {
        throw error
    }

}

export default {
    crearCarrito
}