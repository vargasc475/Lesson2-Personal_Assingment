const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1.js');

routes.get('/', lesson1Controller.jennyRoute);
routes.get('/jerald', lesson1Controller.jeraldRoute);
routes.get('/angee', lesson1Controller.angeeRoute);

module.exports = routes;