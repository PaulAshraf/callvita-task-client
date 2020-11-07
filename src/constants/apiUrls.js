let url = ''

if (process.env.NODE_ENV === 'development') {
	url = 'http://localhost:8000/api/task'
}

export { url as apiUrl }
