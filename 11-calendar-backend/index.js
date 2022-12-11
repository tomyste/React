
// Configuracion Inicial de express
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const res = require('express/lib/response');
const { dbConnection } = require('./database/config');



// Crear el servidor de express
const app = express(); 


//Base de datos
dbConnection();

// CORS
app.use(cors())

// Directorio Publico
app.use( express.static( 'public' ) )


// Lectura y parseo del body
app.use( express.json() );


//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


// TODO: CRUD: eventos

// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
});

// Despues de esto, ya esta montado el backend server y ya estamos listos para escuchar peticiones