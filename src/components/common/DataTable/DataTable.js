import * as React from 'react';
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {useState} from "react";

const DataTable = ({rows, columns, loading, sx}) => {
	const [pageSize, setPageSize] = useState(5);
	return (
		<Box sx={{height: 650, width: '100%'}}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={pageSize}
				sx={sx}
				loading={loading}
				onPageSizeChange={(newPageSize)=> setPageSize(newPageSize)}
				rowsPerPageOptions={[2,5,10]}
				checkboxSelection
				disableSelectionOnClick
				experimentalFeatures={{newEditingApi: true}}
			/>
		</Box>
	);
}
export default DataTable;