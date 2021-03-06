import React from 'react'
import styled from 'styled-components'
import { AiFillWarning } from 'react-icons/ai'
import { error } from '../constants/colors'

const Error = (props) => {
	return (
		<Container>
			<AiFillWarning size={64} />
			<div>{props.message}</div>
		</Container>
	)
}

const Container = styled.div`
	color: ${error};
	text-align: center;
	padding: 10px;
	font-size: 2rem;
	font-family: 'Comfortaa';

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

export default Error
