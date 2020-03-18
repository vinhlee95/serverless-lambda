import { v4 as uuidv4 } from 'uuid';
import AWS from 'aws-sdk'
const db = new AWS.DynamoDB.DocumentClient();
const TODOS_TABLE = process.env.TODOS_TABLE;

export const getAll = (req, res) => {
	const params = {
		TableName: TODOS_TABLE
	}

	db.scan(params, (error, todos) => {
		if(error) {
			console.error('Error in getting todos', error)
			return res.status(500).json({message: 'Cannot get todos'})
		}

		res.status(200).json(todos)
	})
}

export const getById = (req, res) => {
  const todoId = req.params.id
	const params = {
		TableName: TODOS_TABLE,
		Key: {
			todoId
		}
	}

	db.get(params, (error, todo) => {
		if(error) {
			console.error('Error in getting todo by that id', todoId, error)
			return res.status(500).json({message: 'Cannot get todo by that id'})
		}

		res.status(200).json(todo)
	})
}

export const createOne = (req, res) => {
	const params = {
		TableName: TODOS_TABLE,
		Item: {
			todoId: uuidv4(),
			name: req.body.name,
			status: req.body.status
		}
	}

	db.put(params, (error, todo) => {
		if(error) {
			console.error('Error in creating a new todo', error)
			return res.status(500).json({message: 'Cannot create todo'})
		}

		res.status(201).json(todo)
	})
}