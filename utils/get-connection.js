import mongoose from 'mongoose'

const getConnection = async (uri_remota) => {

  try {
   await mongoose.connect(uri_remota)
   console.log('Conexion OK')
  } catch (error) {
    console.log('Conexion ERROR', error)
  }

}

export default getConnection
