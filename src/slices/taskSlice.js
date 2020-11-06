import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	tasks: [],
	isLoading: false,
	error: null,
}

const taskSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		//Fetch tasks
		fetchRequested: (state) => {
			state.isLoading = true
		},
		fetchSuccess: (state, action) => {
			state.isLoading = false
			state.tasks = action.payload
		},
		fetchRejected: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { fetchRequested, fetchSuccess, fetchRejected } = taskSlice.actions
export default taskSlice.reducer
