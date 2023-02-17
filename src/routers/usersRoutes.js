const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

router.get('/login',usersController.login );

router.get('/register',usersController.register );

router.post('/register',usersController.save );

router.get('/list', usersController.list);

router.get('/search', usersController.search);

router.get('/:userId/edit', usersController.edit);

router.put('/:userId/edit', usersController.update);

router.delete('/:userId/delete', usersController.delete);



module.exports = router;