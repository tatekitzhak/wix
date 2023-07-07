const jsonData = require('../models/data.json');

const getTickets = (req, res, next) => {

    res.status(200)
        .set({ 'status': 'ok' })
        .json(jsonData)
};

// GET a Single User by ID
const getUserById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
};

//POST a New User
const createTickets = (req, res, next) => {

    const title = req.body.title;
    const tickets_match = [];

    for (const val of jsonData) {
        if (val['title'].includes(title)) {
            tickets_match.push(val)
        }
    }

    if (!tickets_match.length) {
        res.status(404)
            .json({
                "message": "Sorry, page not found",
                'error': 'Not found'
            })
    } else {
        res.status(200)
            .set({ 'status': 'ok' })
            .json(tickets_match)
    }

};

// PUT Updated Data into an Existing User
const updateUser = (req, res) => {
    const id = parseInt(req.params.id)
    const {
        username,
        password
    } = req.body
    // pool.query(
    //     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    //     [name, email, id],
    //     (error, results) => {
    //         if (error) {
    //             throw error
    //         }
    //         res.status(200).send(`User modified with ID: ${id}`)
    //     }
    // )

    res.status(200)
        .set({ 'status': 'ok' })
        .json([{
            username: username,
            password: password,
            info: `User modified with ID: ${id}`
        }])
};

// DELETE a User
const deleteUser = (req, res) => {
    const id = parseInt(req.params.id)
    // pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    //     if (error) {
    //         throw error
    //     }
    //     res.status(200).send(`User deleted with ID: ${id}`)
    // })

    res.status(200)
        .set({ 'status': 'ok' })
        .json([{
            info: `User modified with ID: ${id}`
        }])
};

module.exports = {
    getTickets,
    getUserById,
    createTickets,
    updateUser,
    deleteUser,
}