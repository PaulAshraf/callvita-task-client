import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRequested } from '../slices/taskSlice'
import Loading from './Loading'
import Task from './Task'
import Error from './Error'
import styled from 'styled-components'
import NewTask from './NewTask'
import Bar from './Bar'

const TaskList = () => {
	const dispatch = useDispatch()

	const tasks = useSelector((state) => state.tasks.tasks)
	const isLoading = useSelector((state) => state.tasks.isLoading)
	const error = useSelector((state) => state.tasks.error)

	useEffect(() => {
		dispatch(fetchRequested())
	}, [dispatch])

	const [showNew, setShowNew] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<Container>
			{isLoading ? (
				<Loading />
			) : error ? (
				<Error message={error} />
			) : (
				<div>
					<Bar
						onClick={() => setShowNew(true)}
						search={setSearchTerm}
					/>
					{showNew ? (
						<NewTask cancel={() => setShowNew(false)} />
					) : (
						<></>
					)}
					{tasks
						.filter((task) =>
							searchTerm
								.toLowerCase()
								.trim()
								.split(' ')
								.map(
									(term) =>
										task.title
											.toLowerCase()
											.includes(term) ||
										task.description
											.toLowerCase()
											.includes(term)
								)
								.reduce((acc, curr) => (acc = acc || curr))
						)
						.map((task) => (
							<Task key={task.id} task={task} />
						))}
				</div>
			)}
		</Container>
	)
}

const Container = styled.div`
	height: 100vh;
`

export default TaskList
