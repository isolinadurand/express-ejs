const path = require('path');

const login = path.join(__dirname,'../views/users/login.ejs');
const register = path.join(__dirname, '../views/users/register.ejs');

const usersController = {
    login: (req, res) => {
        res.render(login);
    },
    register: (req, res) => {
        res.render(register);
    }
}

module.exports = usersController;