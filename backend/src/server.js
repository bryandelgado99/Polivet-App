// Requerir los módulos
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';

// Importar la variable routerVeterinarios
import routerVeterinarios from './routers/veterinario_routes.js'

// Importar la variable routerPacientes
import routerPacientes from './routers/paciente_routes.js'


// Importar la variable routerPacientes
import routerTratamientos from './routers/tratameinto_routes.js'




// Inicializaciones
const app = express()
dotenv.config()

// Configuraciones 
app.set('port',process.env.port || 3000)
app.use(cors())

// Middlewares 
app.use(express.json())


// Variables globales



// Rutas 
app.use('/api',routerVeterinarios)
app.use('/api',routerPacientes)
app.use('/api',routerTratamientos)



// Manejo de una ruta que no sea encontrada
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))



// Exportar la instancia de express por medio de app
export default  app