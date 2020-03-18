import express from 'express'
import * as todos from './controllers/todos'
import * as todo from './controllers/todo'

const app = express()

app.get('/', (req, res) => res.status(200).send('OK'))
app.get('/todos', (req, res) => {
	todos.getAll(req, res)
})
app.get('/todos/:id', (req, res) => {
	todo.getById(req, res)
})

export default app