const express = require( 'express');
const route = express.Router()
const todoRoutes = require ("./todo-route")
const usersRoutes = require ("./user-route")

route.get ("/", (req, res) => {
    res.json({
        massage:"selamat datang"

    })
})

// route.use ("/todos", todoRoutes)

route.use ("/users", usersRoutes)


module.exports = route