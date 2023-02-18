const fs = require('fs');
const path = require('path');




const login = path.join(__dirname,'../views/users/login.ejs');
const register = path.join(__dirname, '../views/users/register.ejs');
const userList = path.join(__dirname,'../views/users/usersList.ejs');
const usersRes = path.join(__dirname, '../views/users/usersResults.ejs');
const usersEdit = path.join(__dirname, '../views/users/usersEdit.ejs');


const usersController = {
    readFile: function(){
        let usersFile = fs.readFileSync('users.json',{encoding:'utf-8'});
        let users;
        if (usersFile == ""){
             return users = [];
        } else {
             return users = JSON.parse(usersFile);
         }
    },

    login: (req, res) => {
        res.render(login);
    },
    register: (req, res) => {
        res.render(register);
    },
    save: (req, res) => {
        let newUser = {
            name: req.body.name,
            edad: req.body.edad,
            email: req.body.email
        }
        let users = usersController.readFile();
      
      users.push(newUser);
      let usersJSON = JSON.stringify(users);

      fs.writeFileSync('users.json', usersJSON);



    
        //redirije a listado de usuarios
        res.redirect('/users/list');

    },
    list: (req, res) => {
        let users = usersController.readFile();
              
        res.render(userList, {'users': users});
    },
    search: (req, res) => {
        let loQueBuscoElUsuario = req.query.searchBar;
        let usersResults = [];
        let users = usersController.readFile();
       
        for (let i=0 ; i< users.length; i++) {
            if (users[i].name.includes(loQueBuscoElUsuario)) {
                usersResults.push(users[i]);
            }
            
        }
        res.render(usersRes, {'usersResults': usersResults});

        
    },
    edit: (req, res) => {
        let users = usersController.readFile();
        
        let userId = req.params.userId;
 
        let userToEdit= users[parseInt(userId)-1];

       res.render(usersEdit, {userToEdit : userToEdit})



    },
    update: (req, res) => {
        res.send('entre por update a modificar')
        //redirije a listado de usuarios
  //      res.redirect('/users/list');

       
        //se supone que grabo la actualización en la base de datos
    },
    delete: (req, res) => {
         let id = parseInt(req.params.userId);
         res.send(`Acá se borra el usuario número ${id} `);
        //acá se borrará el dato de la base de datos.
    },
  
}

module.exports = usersController;