const express = require('express');
const contactController = require('../controller/contactController');
const contactRoute = express.Router();

contactRoute.post('/contact', contactController);
module.exports = contactRoute;