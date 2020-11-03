import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Task from './Task'

const TaskList = () => {
	const [tasks, setTasks] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get('http://localhost:8000/api/task')
				setTasks(res.data)
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])

	return <div>{tasks && tasks.map((task) => <Task task={task} />)}</div>
}

export default TaskList
