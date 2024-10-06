import express from 'express'
import 'dotenv/config'
import routerProductos from './routers/productos.router.js'
import getConnection from './utils/get-connection.js'

// ! Variables/Constantes
const app = express()
const PORT = process.env.PORT || 2222
const uri_remota = process.env.URI_MONGO


// ! MidleWares

app.use(express.json()) //Interpreta el body que le pasamos y lo entiende

// ! Rutas

app.use('/api/v1/productos', routerProductos)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.all('*', (req, res) => {
    res
        .status(404)
        .json({
            ruta: `${req.url}`,
            metodo: `${req.method}`,
            mensaje: 'No se pudo acceder al recurso solicitado'
        })
})

app.listen(PORT, (error) => {
    if (error) throw new Error('No se pudo levantar el servidor', Error)
    console.log(`Servidor corriendo en: http://localhost:${PORT}`)
    getConnection(uri_remota)
})

