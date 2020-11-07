import React from 'react'
import styled from 'styled-components'
import { primary } from '../constants/colors'
import { AiFillHeart } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'

const Footer = () => {
	return (
		<div>
			<Container>
				Created with <AiFillHeart /> using <FaReact /> <br />
				Paul Ashraf ©️ 2020
			</Container>
		</div>
	)
}

const Container = styled.div`
	margin: auto;
	width: fit-content;
	color: ${primary};
	font-family: 'Comfortaa';
	/* position: absolute; */
	bottom: 0;
`

export default Footer
