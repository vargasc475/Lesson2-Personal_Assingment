const routes = require('express').Router();
const contacts = require('../controllers/updater');
const addNew = require('../controllers/updater');
const update = require('../controllers/updater');
const deleteData = require('../controllers/updater');

routes.get('/', contacts.findAllDocuments);
routes.get('/:id', contacts.findOneDocument);
routes.post('/post', addNew.newDocument);
routes.put('/put/:id', update.updateDocument);
routes.delete('/delete/:id', deleteData.deleteDocument);

module.exports = routes;