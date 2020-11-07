import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { fetchRequested } from '../slices/taskSlice'
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'
import { containerBackground, primary, secondary } from '../constants/colors'
import { apiUrl } from '../constants/apiUrls'
import Loading from './Loading'
import axios from 'axios'

const NewTask = (props) => {
	const cancel = props.cancel

	const [loading, setLoading] = useState(false)
	const [editValue, setEditValue] = useState({
		title: 'Title',
		description: 'Description',
	})

	const dispatch = useDispatch()

	const createTask = async () => {
		setLoading(true)
		try {
			await axios.post(apiUrl, editValue)
		} catch (error) {
			console.error(error)
		}
		setLoading(false)
		cancel()
		dispatch(fetchRequested())
	}

	return (
		<Container>
			{loading ? (
				<Loading />
			) : (
				<div>
					<Code>new-task</Code>
					<Heading>
						<Input
							defaultValue={editValue.title}
							onChange={(e) =>
								setEditValue({
									...editValue,
									title: e.target.value,
								})
							}
						/>

						<Buttons>
							<Button>
								<AiFillCheckCircle
									onClick={() => createTask()}
								/>
							</Button>
							<Button>
								<MdCancel onClick={() => cancel()} />
							</Button>
						</Buttons>
					</Heading>

					<InputDesc
						defaultValue={editValue.description}
						onChange={(e) =>
							setEditValue({
								...editValue,
								description: e.target.value,
							})
						}
					/>
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

export default NewTask
