export const getById = (req, res) => {
  const todoId = req.params.id
  const todos = [
		{id: 1, name: 'clean up', status: 'open'},
		{id: 2, name: 'cook', status: 'done'}
	]
  const todo = todos.find(todo => todo.id == todoId)

  if(!todo) return res.status(404).json({message: 'No todo with that id'})

	res.status(200).json(todo)
}