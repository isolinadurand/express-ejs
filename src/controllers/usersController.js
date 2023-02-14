const path = require('path');

const login = path.join(__dirname,'../views/users/login.ejs');
const register = path.join(__dirname, '../views/users/register.ejs');
const userList = path.join(__dirname,'../views/users/userList.ejs');

const usersController = {
    login: (req, res) => {
        res.render(login);
    },
    register: (req, res) => {
        res.render(register);
    },
    list: (req, res) => {
        let users= [
            'Dario',
            'Javier',
            'Iso',
            'Clari',
            'Matu',
            'Jorge',
            'Parde',
        ];
        res.render(userList, {'users': users});
    }
}

module.exports = usersController;