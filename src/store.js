import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import taskReducer from './slices/taskSlice'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
	reducer: {
		tasks: taskReducer,
	},
	middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)
