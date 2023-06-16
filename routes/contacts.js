const routes = require('express').Router();
const contacts = require('../controllers/updater');


routes.get('/', contacts.findAllDocuments);
routes.get('/:id', contacts.findOneDocument);
routes.post('/post', contacts.newDocument);
routes.put('/put/:id', contacts.updateDocument);
routes.delete('/delete/:id', contacts.deleteDocument);

module.exports = routes;