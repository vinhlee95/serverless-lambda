module.exports.handler = async (event) => {
	const todos = [
		{id: 1, name: 'clean up', status: 'open'},
		{id: 1, name: 'cook', status: 'done'}
	]

	return {
		statusCode: 200,
		body: JSON.stringify(todos)
	}
}
