require('dotenv').config();
const express = require('express');
const app = express();

const routes = require('./routes/routes');

app.use(express.json());
app.use('/apiBsnss', routes); // todas las rutas comienzan con /apiBsnss

const PORT = process.env.PORT || 5055;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});