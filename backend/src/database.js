
//Importar mongoose
import mongoose from 'mongoose'

const ATLAS_URI = "mongodb+srv://bryand9970:bryand9970@cluster001.zj6u1tq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster001"

// Pertimitir que solo los campos definidos en el Schema sean almacenados en la BDD
mongoose.set('strictQuery', true)

// Crear una función llamada connection()
const connection = async()=>{
    try {
        // Establecer al conexión con la BDD
        const {connection} = await mongoose.connect(process.env.ATLAS_URI || ATLAS_URI)
        
        // Presentar la conexión en consola 
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    
    } catch (error) {
        // Capturar Error en la conexión
        console.log(error);
    }
}


//Exportar la función
export default  connection