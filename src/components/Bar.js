import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiAddToQueue } from 'react-icons/bi'
import { containerBackground, primary, secondary } from '../constants/colors'
import styled from 'styled-components'

const Bar = (props) => {
	return (
		<Wrapper>
			<Container onClick={props.onClick}>
				<BiAddToQueue /> New
			</Container>
			<Container>
				<AiOutlineSearch />{' '}
				<Input onChange={(e) => props.search(e.target.value)} />
			</Container>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	@media (max-width: 600px) {
		flex-direction: column;
	}
`

const Container = styled.div`
	background-color: ${containerBackground};
	font-size: 1.8rem;
	text-align: center;
	height: 30px;
	padding: 10px;
	font-family: 'Comfortaa';
	color: ${primary};
	margin: 50px;
	margin-bottom: 10px;
	width: calc(70% / 3);
	@media (max-width: 600px) {
		width: calc(100% / 2);
		margin: auto;
		margin-top: 10px;
	}
	border: dashed ${primary};
	cursor: pointer;
	:hover {
		background-color: ${secondary};
	}
`

const Input = styled.input`
	width: 50%;
	height: 100%;
	font-size: 1.8rem;
	color: ${primary};
	background-color: ${containerBackground};
	border: none;
	font-family: 'Comfortaa';
	vertical-align: middle;
	:hover {
		background-color: ${secondary};
	}
	:focus {
		outline: none;
	}
`

export default Bar
