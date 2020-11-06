import { all } from 'redux-saga/effects'
import { fetchTasksWatcher } from './taskSaga'

export default function* rootSaga() {
	yield all([fetchTasksWatcher()])
}
