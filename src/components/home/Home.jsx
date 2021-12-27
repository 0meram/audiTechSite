import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import PetList from "./PetList";
import "./home.css";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
	},
	media: {
		height: 140,
	},
	card: {
		maxWidth: 345,
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #ffffff",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(1, 1, 1),
		borderRadius: "4px",
		maxWidth: 1000,
		margin: "auto",
	},
	formControl: {
		minWidth: 650,
	},
	submit: {
		margin: 4,
	},
}));

export default function Home() {
	const classes = useStyles();
	const [cardList, setCardList] = useState([1, 2, 3, 4, 5]);
	const [empty, setEmpty] = useState(false);

	const [loading, setLoading] = useState(false);


	useEffect(() => {
		setLoading(true);
		axios
			.get(`http://localhost:5000/search/byType?type=`)
			.then(function (response) {
				console.log(response);
				// setTimeout(() => {
				// 	setLoading(false);
				// }, 1500);
				// setCardList(response.data);
				// if (response.data.length === 0) {
				// 	setEmpty(true);
				// } else {
				// 	setEmpty(false);
				// }
			});
		// if (!type) setType("%%");
	}, []);




	return (
		<div className="search-con">
			<div className="list-wrap">
				<div className="list">
					{cardList.map((card, i) => (
					<PetList/>
					))}
				</div>
			</div>
		</div>
	);
}
