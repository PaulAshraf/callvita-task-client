import React from 'react'
import styled from 'styled-components'

const Task = (props) => {
	const task = props.task

	return (
		<Container>
			<Code>{task.id.split('-')[0]}</Code>
			<Title>{task.title}</Title>
			<Desc>{task.description}</Desc>
		</Container>
	)
}

const Container = styled.div`
	background-color: #a3d2ca;
	width: 60%;
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

const Code = styled.div`
	text-align: left;
	color: #5eaaa8;
	font-size: 0.7rem;
	font-family: 'Share Tech Mono';
`

const Title = styled.div`
	color: #056676;
	text-align: left;
	font-size: 1.5rem;
	font-family: 'Ubuntu Mono';
	font-style: italic;
	font-weight: bold;
	padding: 10px;
`

const Desc = styled.div`
	color: #056676;
	text-align: left;
	padding: 10px;
	font-size: 1rem;
	font-family: 'Ubuntu Mono';
`

export default Task
