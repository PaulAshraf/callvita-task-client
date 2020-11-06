import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

const fetchAPI = async () => {
	const response = await axios.get('http://localhost:8000/api/task')
	return response.data
}

function* fetchTasks() {
	try {
		const data = yield call(fetchAPI)
		yield put({ type: 'tasks/fetchSuccess', payload: data })
	} catch (error) {
		yield put({ type: 'tasks/fetchRejected', payload: error.toString() })
	}
}

export function* fetchTasksWatcher() {
	yield takeLatest('tasks/fetchRequested', fetchTasks)
}
