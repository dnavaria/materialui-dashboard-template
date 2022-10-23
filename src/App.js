import {Grid} from "@mui/material";
import {useState, useEffect} from "react";
import {Outlet, useLocation} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";


function App() {
	const [title, setTitle] = useState(null);
	const location = useLocation();

	useEffect(() => {
		const title = location.pathname.replace(/\W/g, ' ')
		setTitle(title)
	}, [location])

	return (
		<Grid container>
			<Navbar/>
			<Header title={title}/>
			<Outlet/>
		</Grid>
	);
}

export default App;
