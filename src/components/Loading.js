import React from 'react'
import { FadeLoader } from 'react-spinners'
import styled from 'styled-components'

const Loading = () => {
	return (
		<Container>
			<FadeLoader color="#056676" />
		</Container>
	)
}

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

export default Loading
