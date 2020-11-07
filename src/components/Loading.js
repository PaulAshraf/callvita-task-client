import React from 'react'
import { FadeLoader } from 'react-spinners'
import { primary } from '../constants/colors'
import styled from 'styled-components'

const Loading = () => {
	return (
		<Container>
			<FadeLoader color={primary} />
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	min-height: 100px;
`

export default Loading
