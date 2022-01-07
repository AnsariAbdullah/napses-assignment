import React from 'react';
import styled from 'styled-components';
import NavBar from './components/navbar';
import RightSidebar from './components/rightSidebar';
import SearchBox from './components/searchBox';

const AppWrapper = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	main {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px 60px;
	}
`

const App = () => {
	return (
		<AppWrapper>
			<NavBar />
				<main>
					<SearchBox />
					I am main
				</main>
			<RightSidebar />
		</AppWrapper>
	);
}
 
export default App;