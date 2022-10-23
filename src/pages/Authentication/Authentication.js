import { Grid } from "@mui/material";

import React from 'react'
import BasicCard from '../../components/common/BasicCard/BasicCard';
import RefreshIcon from '@mui/icons-material/Refresh';
// import SearchBar from '../../components/common/SearchBar/SearchBar';
import IconButton from '@mui/material/IconButton';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
// import { cardHeaderStyles } from './styles';


const Authentication = () => {
  // const buttonStyles = {
  //   fontWeight: 600,
  //   fontSize: '0.875rem',
  //   testTransform: 'capitalize',
  //   borderRadius: 2.5,
  //   '&.MuiButton-contained': {
  //     background: "#009be5",
  //     '&:hover': {
  //       backgroundColor: '#006db3'
  //     },
  //   },
  //   '&.MuiButton-outlined': {
  //     color: "#fff",
  //     borderColor: '#fff',
  //     '&:hover': {
  //       backgroundColor: 'transparent'
  //     },
  //   }
  // }

  return (
    <Grid item xs={8}>
      <BasicCard content={"Card1"}/>

      {/* <CommonButton size="large" variant="contained" sx={buttonStyles} >Add User</CommonButton>
        <CommonButton size="large" sx={buttonStyles} variant="outlined">Web Setup</CommonButton> */}
    </Grid>
  )
}

export default Authentication;