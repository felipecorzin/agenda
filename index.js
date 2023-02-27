const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();


// Crear el servidor/aplicación de express
const app = express();

// Base de datos
dbConnection();

// Directorio Público
app.use( express.static('public') );

// CORS
app.use( cors({
  credentials: true,
  origin: ["http://localhost:8100"],
}));

// Lectura y parseo del body
app.use( express.json({ limit: '10mb' }));
app.use( express.urlencoded({ extended: true, limit: '10mb' }));


// Rutas
app.use( '/api/note', require('./routes/note') );
app.use( '/api/wallet', require('./routes/wallet') );
app.use( '/api/transaction', require('./routes/transaction') );
app.use( '/api/event', require('./routes/event') );

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});