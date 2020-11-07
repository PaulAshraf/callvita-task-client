import React from 'react'
import styled from 'styled-components'
import { primary } from '../constants/colors'

const Header = () => {
	return <Container>CallVita Task</Container>
}

const Container = styled.h1`
	margin: auto;
	width: fit-content;
	color: ${primary};
	font-family: 'Comfortaa';
	padding-top: 20px;
`

export default Header
