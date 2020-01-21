const express = require('express');
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({message: "It's working - Login Microservices!"});
})

routes.post('/users', SessionController.store);

routes.post('/signin', SessionController.signin);

routes.post('/servicesTypeMock', SessionController.servicesTypeMock);


module.exports = routes;