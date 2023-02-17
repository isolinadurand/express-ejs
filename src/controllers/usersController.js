const path = require('path');

const login = path.join(__dirname,'../views/users/login.ejs');
const register = path.join(__dirname, '../views/users/register.ejs');
const userList = path.join(__dirname,'../views/users/usersList.ejs');
const usersRes = path.join(__dirname, '../views/users/usersResults.ejs');
const usersEdit = path.join(__dirname, '../views/users/usersEdit.ejs');
const users= [
    {id: 1 , name:'Dario'},
    {id: 2 , name:'Javier'},
    {id: 3 , name: 'Iso'},
    {id: 4 , name: 'Clari'},
    {id: 5 , name:'Matu'},
    {id: 6 , name: 'Jorge'},
    {id: 7 , name:'Parde'},
];

const usersController = {
    login: (req, res) => {
        res.render(login);
    },
    register: (req, res) => {
        res.render(register);
    },
    save: (req, res) => {
        let nuevoUsuario = req.body;
        // guarda la info en el modelo
    
        //redirije a listado de usuarios
        res.redirect('/users/list');

    },
    list: (req, res) => {
       
        res.render(userList, {'users': users});
    },
    search: (req, res) => {
        let loQueBuscoElUsuario = req.query.searchBar;
        let usersResults = [];
        for (let i=0 ; i< users.length; i++) {
            if (users[i].name.includes(loQueBuscoElUsuario)) {
                usersResults.push(users[i]);
            }
            
        }
        res.render(usersRes, {'usersResults': usersResults});

        
    },
    edit: (req, res) => {
        let userId = req.params.userId;
        let userToEdit= users[parseInt(userId)-1];
       res.render(usersEdit, {userToEdit : userToEdit})



    },
    update: (req, res) => {
        res.send("ingresé por put");
        //se supone que grabo la actualización en la base de datos
    },
    delete: (req, res) => {
         let id = parseInt(req.params.userId);
         res.send(`Acá se borra el usuario número ${id} de nombre ${users[id - 1].name} `);
        //acá se borrará el dato de la base de datos.
    }
}

module.exports = usersController;