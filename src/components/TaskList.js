import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRequested } from '../slices/taskSlice'
import Task from './Task'

const TaskList = () => {
	const dispatch = useDispatch()

	const tasks = useSelector((state) => state.tasks.tasks)
	const isLoading = useSelector((state) => state.tasks.isLoading)
	const error = useSelector((state) => state.tasks.error)

	useEffect(() => {
		dispatch(fetchRequested())
	}, [dispatch])

	return (
		<div>
			{tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
		</div>
	)
}

export default TaskList
