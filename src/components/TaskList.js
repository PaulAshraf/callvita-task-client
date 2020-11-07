import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRequested } from '../slices/taskSlice'
import Loading from './Loading'
import Task from './Task'
import Error from './Error'
import styled from 'styled-components'

const TaskList = () => {
	const dispatch = useDispatch()

	const tasks = useSelector((state) => state.tasks.tasks)
	const isLoading = useSelector((state) => state.tasks.isLoading)
	const error = useSelector((state) => state.tasks.error)

	useEffect(() => {
		dispatch(fetchRequested())
	}, [dispatch])

	return (
		<Container>
			{isLoading ? (
				<Loading />
			) : error ? (
				<Error message={error} />
			) : (
				tasks.map((task) => <Task key={task.id} task={task} />)
			)}
		</Container>
	)
}

const Container = styled.div`
	height: 100vh;
`

export default TaskList
