const routes = require('express').Router();
const contacts = require('../controllers/getData');

routes.get('/', contacts.findAllDocuments);
routes.get('/:id', contacts.findOneDocument);

module.exports = routes;