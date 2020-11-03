import React from 'react'
import styled from 'styled-components'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

const Task = (props) => {
	const task = props.task

	return (
		<Container>
			<Code>{`${task.id.split('-')[0]}-${task.id.split('-')[1]}`}</Code>
			<Heading>
				<Title>{task.title}</Title>
				<Buttons>
					<Button>
						<AiFillDelete onClick={() => console.log('hi')} />
					</Button>
					<Button>
						<AiFillEdit />
					</Button>
				</Buttons>
			</Heading>
			<Desc>{task.description}</Desc>
		</Container>
	)
}

const Container = styled.div`
	background-color: #a3d2ca;
	width: 70%;
	@media (max-width: 600px) {
		width: 90%;
	}
	height: fit-content;
	margin: auto;
	margin-top: 50px;
	margin-bottom: 50px;
	border: dashed #056676;
	padding: 10px;
`

const Button = styled.span`
	cursor: pointer;
	:hover {
		color: #5eaaa8;
	}
`

const Buttons = styled.div`
	width: fit-content;
`

const Code = styled.div`
	text-align: left;
	color: #5eaaa8;
	font-size: 0.7rem;
	font-family: 'Share Tech Mono';
`
const Heading = styled.div`
	display: flex;
	padding: 10px;
	padding-bottom: 0;
	font-size: 1.8rem;
	color: #056676;
	justify-content: space-between;
`

const Title = styled.div`
	text-align: left;
	font-family: 'Comfortaa';
	/* font-style: italic; */
	font-weight: bold;
`

const Desc = styled.div`
	color: #056676;
	text-align: left;
	padding: 10px;
	font-size: 1.2rem;
	font-family: 'Comfortaa';
`

export default Task
