export const getAll = (req, res) => {
	const todos = [
		{id: 1, name: 'clean up', status: 'open'},
		{id: 1, name: 'cook', status: 'done'}
	]

	res.status(200).json(todos)
}
