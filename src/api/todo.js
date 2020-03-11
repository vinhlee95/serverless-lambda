export const handler = async (event) => {
  const todoId = event.pathParameters.id
  const todos = [
		{id: 1, name: 'clean up', status: 'open'},
		{id: 2, name: 'cook', status: 'done'}
	]
  const todo = todos.find(todo => todo.id == todoId)

  if(!todo) return {
    statusCode: 404,
    body: JSON.stringify({message: 'Cannot find any todo'})
  }

	return {
		statusCode: 200,
		body: JSON.stringify(todo)
	}
}