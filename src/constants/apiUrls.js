let url = 'https://14i7iomlmc.execute-api.us-east-2.amazonaws.com/prod/api/task'

if (process.env.NODE_ENV === 'development') {
	url = 'http://localhost:8000/api/task'
}

export { url as apiUrl }
