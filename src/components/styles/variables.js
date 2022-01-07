import styled from "styled-components"

const colors = {
	dark: '#000',
	white: '#fff',
	gray: '#F9FAFF',
	darkGray: '#ECEFF7',
	primarySelect: '#51459E',
}

const fs = {
	xs: '10px',
	sm: '12px',
	md: '18px',
	xl: '34px',
}

const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${props => props.verticalCenter ? 'center' : 'space-between'}; 
`

export {
	colors,
	fs,
	Flex
}