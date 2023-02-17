const express = require('express');
const app= express();
const path = require('path');
const methodOverride = require('method-override');


const port = 3000;

const mainRoutes = require('./routers/mainRoutes');
const usersRoutes = require('./routers/usersRoutes');
const publicPaht= path.join(__dirname,'../public')

app.use(express.static(publicPaht));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));

app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

app.use('/', mainRoutes);
app.use('/users', usersRoutes);
