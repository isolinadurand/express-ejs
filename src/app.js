const express = require('express');
const app= express();
const port = 3000;
const mainRoutes = require('./routers/mainRoutes');
const usersRoutes = require('./routers/usersRoutes');

app.use(express.static('./public'));

app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

app.use('/', mainRoutes);
app.use('/users', usersRoutes);
