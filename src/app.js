import express from 'express'
import bodyParser from 'body-parser'

import * as todos from './controllers/todos'

const app = express()
app.use(bodyParser.json({strict: false}))

app.get('/', (req, res) => res.status(200).send('OK'))
app.get('/todos', (req, res) => {
	todos.getAll(req, res)
})
app.get('/todos/:id', (req, res) => {
	todos.getById(req, res)
})
app.post('/todos', (req, res) => {
	todos.createOne(req, res)
})

export default app