const express = require('express');
const { getTickets, createTickets, updateUser, deleteUser } = require('./src/controller/queries.js');
const bodyParser = require('body-parser');
const { headers, notFound, errorHandler } = require('./src/middlewares/index.js');

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(headers);

app.get('/tickets', getTickets)
    .post('/tickets', createTickets);

app.put('/update-users/:id', updateUser);
app.delete('/delete-users/:id', deleteUser);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
}); 