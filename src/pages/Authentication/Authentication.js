import React from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import CommonButton from '../../components/common/CommonButton/CommonButton';
import BasicCard from '../../components/common/BasicCard/BasicCard';
import SearchBar from "../../components/common/SearchBar/SearchBar";
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import {cardHeaderStyles} from './styles';


const Authentication = () => {
	const getSearchBar = () => {
		const handleChange = (value) => {
			console.log(value);
		}
		const addUser = () => {
			console.log("click")
		}
		return (
			<Box sx={cardHeaderStyles.wrapper}>
				<SearchBar
					placeholder="Search by email address, phone number or user UID"
					onChange={(event) => handleChange(event.target.value)}
					searchBarWidth='720px'
				/>
				<Box>
					<CommonButton
						variant="contained"
						onClick={addUser}
						size="large"
						sx={cardHeaderStyles.addUserButton}
					>
						Add user
					</CommonButton>
					<IconButton>
						<RefreshIcon/>
					</IconButton>
				</Box>
			</Box>
		)
	}
	const getContent = () => {
		return (
			<Typography
				align="center"
				sx={{margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem'}}
			>
				No users for this project yet
			</Typography>
		);
	}
	return (
		<GridWrapper>
			<BasicCard content={getContent()} header={getSearchBar()}></BasicCard>
		</GridWrapper>
	)
}

export default Authentication;