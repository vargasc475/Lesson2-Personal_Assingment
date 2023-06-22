const routes = require('express').Router();
const contacts = require('../controllers/updater');
const validation = require('../middleware/validation');



routes.get('/', contacts.findAllDocuments);
routes.get('/:id', contacts.findOneDocument);
routes.post('/post', validation.saveContact, contacts.newDocument);
routes.put('/put/:id', validation.saveContact, contacts.updateDocument);
routes.delete('/delete/:id', contacts.deleteDocument);

module.exports = routes;