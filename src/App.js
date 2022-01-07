import React from 'react';
import styled from 'styled-components';
import NavBar from './components/navbar';
import RightSidebar from './components/rightSidebar';
import SearchBox from './components/searchBox';
import CoinCards from './components/coinCards';
import LastActivity from './components/lastActivity';
import { Flex } from './components/styles/variables';

const AppWrapper = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	main {
		width: calc(100% - 720px);
		padding: 35px 70px;
		height: 100%;
	}
`

const Title = styled.p`
	font-size: 36px;
	font-weight: 700;
	margin-top: 65px;
`

const App = () => {
	return (
		<AppWrapper>
			<NavBar />
				<main>
					<SearchBox />
					<Title>Hi, Daniel</Title>
					<Flex verticalCenter className="coin-card-wrapper">
						<CoinCards />
					</Flex>
					<LastActivity />
				</main>
			<RightSidebar />
		</AppWrapper>
	);
}
 
export default App;