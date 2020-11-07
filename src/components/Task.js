import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { fetchRequested } from '../slices/taskSlice'
import { AiFillDelete, AiFillEdit, AiFillCheckCircle } from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'
import { containerBackground, primary, secondary } from '../constants/colors'
import { apiUrl } from '../constants/apiUrls'
import Loading from './Loading'
import axios from 'axios'

const Task = (props) => {
	const task = props.task

	const [loading, setLoading] = useState(false)
	const [edit, setEdit] = useState(false)
	const [editValue, setEditValue] = useState({
		title: task.title,
		description: task.description,
	})

	const dispatch = useDispatch()

	const deleteTask = async (id) => {
		setLoading(true)
		try {
			await axios.delete(`${apiUrl}/${id}`)
		} catch (error) {
			console.error(error)
		}
		setLoading(false)
		dispatch(fetchRequested())
	}

	const updateTask = async (id) => {
		setLoading(true)
		try {
			await axios.put(`${apiUrl}/${id}`, editValue)
		} catch (error) {
			console.error(error)
		}
		setLoading(false)
		dispatch(fetchRequested())
	}

	return (
		<Container>
			{loading ? (
				<Loading />
			) : (
				<div>
					<Code>{`${task.id.split('-')[0]}-${
						task.id.split('-')[1]
					}`}</Code>
					<Heading>
						{!edit ? (
							<Title>{task.title}</Title>
						) : (
							<Input
								defaultValue={editValue.title}
								onChange={(e) =>
									setEditValue({
										...editValue,
										title: e.target.value,
									})
								}
							/>
						)}
						{!edit ? (
							<Buttons>
								<Button>
									<AiFillDelete
										onClick={() => deleteTask(task.id)}
									/>
								</Button>
								<Button>
									<AiFillEdit
										onClick={() => setEdit(!edit)}
									/>
								</Button>
							</Buttons>
						) : (
							<Buttons>
								<Button>
									<AiFillCheckCircle
										onClick={() => updateTask(task.id)}
									/>
								</Button>
								<Button>
									<MdCancel onClick={() => setEdit(!edit)} />
								</Button>
							</Buttons>
						)}
					</Heading>
					{!edit ? (
						<Desc>{task.description}</Desc>
					) : (
						<InputDesc
							defaultValue={editValue.description}
							onChange={(e) =>
								setEditValue({
									...editValue,
									description: e.target.value,
								})
							}
						/>
					)}
				</div>
			)}
		</Container>
	)
}

const Container = styled.div`
	background-color: ${containerBackground};
	width: 70%;
	@media (max-width: 600px) {
		width: 90%;
	}
	min-height: 100px;
	height: fit-content;
	margin: auto;
	margin-top: 50px;
	margin-bottom: 50px;
	border: dashed ${primary};
	padding: 10px;
`

const Button = styled.span`
	cursor: pointer;
	:hover {
		color: ${secondary};
	}
`

const Buttons = styled.div`
	width: fit-content;
`

const Code = styled.div`
	text-align: left;
	color: ${secondary};
	font-size: 0.7rem;
	font-family: 'Share Tech Mono';
`
const Heading = styled.div`
	display: flex;
	padding: 10px;
	padding-bottom: 0;
	font-size: 1.8rem;
	color: ${primary};
	justify-content: space-between;
`

const Title = styled.div`
	text-align: left;
	font-family: 'Comfortaa';
	/* font-style: italic; */
	font-weight: bold;
`

const Desc = styled.div`
	color: ${primary};
	text-align: left;
	padding: 10px;
	font-size: 1.2rem;
	font-family: 'Comfortaa';
`

const Input = styled.input`
	width: 60%;
	font-size: 1.3rem;
	color: ${primary};
	background-color: ${secondary};
	border: none;
	border-bottom: solid ${primary};
	font-family: 'Comfortaa';
	margin: 5px;
	justify-items: end;
`

const InputDesc = styled(Input)`
	margin-left: 15px;
	width: calc(60% - 12px);
`

export default Task
