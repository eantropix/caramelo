import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 24px;
`;

export const Filters = styled.div`
	display: flex;
	align-items: center;
`;

export const Filter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 0 36px;
`;

export const FilterOptions = styled.div`
	display: flex;
	align-items: center;

	div:first-of-type {
		margin: 0;
		margin-right: 4px;
	}

	div {
		margin: 0 4px;
	}
`;

export const Pets = styled.div``;

export const SearchBar = styled.div`
	display: flex;
	align-items: center;

	padding: 12px;
	border-radius: 12px;

	background-color: #c4c4c4;

	input {
		outline: 0;
		border: 0;
		background-color: transparent;
		margin-left: 12px;
	}
`;
