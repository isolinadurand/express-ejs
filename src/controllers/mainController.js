const path = require('path');

const home = path.join(__dirname,'../views/main/home.ejs');

const mainController = {
    home: (req, res) => {
        res.render(home);
    }
}

module.exports = mainController;
