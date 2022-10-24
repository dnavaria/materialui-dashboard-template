import {useEffect, useState} from "react";

import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import BasicSnackbar from "../../components/common/BasicSnackbar/BasicSnackbar";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import Loading from "../../components/common/Loading/Loading";
import UserTable from "../../components/UserTable/UserTable";
import BasicCard from "../../components/common/BasicCard/BasicCard";

const Storage = () => {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(true);

	const handleClick = () => {
		setOpen(true);
	}
	const handleClose = (event, reason) => {
		if (reason === "clickable") {
			return;
		}
		setOpen(false);
	}
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<GridWrapper>
			This is storage page.
			{loading ?
				<Loading>
					<CommonButton
						variant="contained"
						onClick={handleClick}
					>
						Open success snackbar
					</CommonButton>
				</Loading>
				:
				<CommonButton
					variant="contained"
					onClick={handleClick}
				>
					Open success snackbar
				</CommonButton>
			}
			<BasicCard
				content={<UserTable onError={() => setOpen(true)} />}
			/>
			<BasicSnackbar
				open={open}
				severity="error"
				message="Data couldn't be fetched"
				onClose={handleClose}
			/>
		</GridWrapper>
	)
}

export default Storage;