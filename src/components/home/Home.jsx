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

	const API_KEY = "IVvVFsdJNB113m1ycK0tc3fDNQ4ekKkL734rjO91";
	const region = "US",
		lang = "en";
	const symbols = "BAC%2CKC%3DF%2C002210.KS%2CIWM%2CAMECX";

	// useEffect(() => {
	// 	axios
	// 		.get(
	// 			`https://yfapi.net/v6/finance/quote/marketSummary?lang=en&region=US`,
	// 			{
	// 				headers: {
	// 					accept: "application/json",
	// 					"X-API-KEY": "IVvVFsdJNB113m1ycK0tc3fDNQ4ekKkL734rjO91",
	// 				},
	// 			}
	// 		)
	// 		.then(function (response) {
	// 			setCardList(response.data.marketSummaryResponse.result);
	// 		});
	// }, []);

	return (
		<div className="search-con">
			<div className="list-wrap">
				<div className="list">
					{cardList.map(
						(card, i) => (
							console.log("~ cardList", cardList),
							(
								<PetList
									card={card}
									exchange={card.exchange}
									// regularMarketChangePercent={
									// 	card.regularMarketChangePercent.fmt
									// }
									fullExchangeName={card.fullExchangeName}
									exchangeTimezoneName={card.exchangeTimezoneName}
								/>
							)
						)
					)}
				</div>
			</div>
		</div>
	);
}
