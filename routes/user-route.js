const express = require('express');
const { getAllUser, getUserById } = require('../controllers/user-controller');
const route = express.Router()

route.get('/', getAllUser)
route.get('/:id', getUserById)
// route.post ('/', addTodo)
// route.put('/:id', editTodoById)
// route.delete('/:id', deleteTodobyId)

module. exports = route