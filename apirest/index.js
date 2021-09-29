const express = require('express'); // Nuestro Servidor y Plataforma WEB
const mongoose = require('mongoose'); // Driver Conexión a MongoDB
const methodOverride = require("method-override"); // Reescribir Datos con Persistencia
const cors = require('cors'); // Modulo de Seguridad para Denegar Accesos no Autorizados
const Moment = require('moment-timezone'); // Configurar el Horario con el Servidor

// Establezco mi Formato de Horario para el Servidor
Moment().tz('America/Bogota').format();

// Creo la Constante app equivalente a todos los atributos del objeto express
const app = express();

// Aseguramos las Conexiones Entrantes
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

// Agregamos a Express el Middleware CORS con las Opciones declaradas
app.use(cors(corsOptions));

// Conexión a Nuestra Base de Datos en MongoDB
mongoose.connect('mongodb://root:.integracion.@localhost:27017/integracion?authSource=admin&readPreference=primary&appname=NodeJS&directConnection=true&ssl=false', function (err, res) {
    if (err) throw err;
    console.log('API Rest Conectada a MongoDB!');
});

// Mas Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());

// Definimos y Aplicamos el Puerto que se Utilizará en Nuestro Aplicación de API Rest
app.set('port', process.env.PORT || 4000);






// Start server
app.listen(app.get('port'), function () {
    console.log("Server Runngin on Port: ", app.get('port'));
});