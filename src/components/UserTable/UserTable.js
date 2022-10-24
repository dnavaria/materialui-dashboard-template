import DataTable from "../common/DataTable/DataTable";
import {useEffect, useState} from "react";

const columns = [
	{ field: 'id', headerName: 'User ID', width: 150 },
	{ field: 'name', headerName: 'Name', width: 150 },
	{ field: 'username', headerName: 'Username', width: 150 },
	{ field: 'email', headerName: 'E-mail', width: 200 },
];

const UserTable = ({onError}) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((json) => setUsers(json))
			.catch(() => onError())
	}, []);

	return (
		<DataTable
			rows={users}
			columns={columns}
			loading={!users.length}
		/>
	);
};

export default UserTable;