import express from "express";
const routerProductos = express.Router()
import controladores from '../controllers/productos.controllers.js'

/* CRUD -> CREATE | READ | UPDATE | DELETE */

//! GET ALL (READ) -> Request de todos los productos
routerProductos.get('/', controladores.getAll)


// ! GET ONE (READ) -> Request de un producto -> tiene que recibir el id del producto en los parametros
routerProductos.get('/:id', controladores.getOne)


// ! POST (CREATE) -> Request de creacion de un producto
routerProductos.post('/', controladores.create)


// ! PUT (UPDATE) -> Reqest de actualizacion de un producto
routerProductos.put('/:id', controladores.update)


// ! DELETE (DELETE) -> Request de borrado de un producto
routerProductos.delete('/:id', controladores.remove)


export default routerProductos

