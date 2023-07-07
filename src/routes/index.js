const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');

const router = express.Router();

var todos = [
    { id: 1, title: 'buy the milk' },
    { id: 2, title: 'rent a car' },
    { id: 3, title: 'feed the cat' }
];

router.get('/', (request, response) => {
    response.status(200).json(todos)
});