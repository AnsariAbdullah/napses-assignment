import React from 'react';
import styled from 'styled-components';

const SearchBoxWrapper = styled.div`
`

const SearchBox = () => {
	return (
		<SearchBoxWrapper>
			<input type="text" placeholder="Search..." name="search" />
		</SearchBoxWrapper>
	);
}
 
export default SearchBox;