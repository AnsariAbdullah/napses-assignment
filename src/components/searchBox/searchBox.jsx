import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';

const SearchBoxWrapper = styled.div`
	input[type="text"] {
    width: 100%;
    height: 48px;
    padding: 15px 20px;
    border-radius: 30px;
    border: none;
		background: ${colors.gray};
		color: #7B7B7B;
		font-size: 16px;
		&:focus{
    	outline: none;
		}
	}
`

const SearchBox = () => {
	return (
		<SearchBoxWrapper>
			<input type="text" placeholder="Search..." name="search" />
		</SearchBoxWrapper>
	);
}
 
export default SearchBox;