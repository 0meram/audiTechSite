import React, { useState, useEffect } from "react";
import axios from "axios";
import StockList from "./StockList";
import ClipLoader from "react-spinners/ClipLoader";
import "./home.css";

export default function Home() {
	const [cardList, setCardList] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get(
				`https://yfapi.net/v6/finance/quote/marketSummary?lang=en&region=US`,
				{
					headers: {
						accept: "application/json",
						"X-API-KEY": "IVvVFsdJNB113m1ycK0tc3fDNQ4ekKkL734rjO91",
					},
				}
			)
			.then(function (response) {
				setCardList(response.data.marketSummaryResponse.result);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<h1 className="title">AudiTech Stocks</h1>
			{loading && <ClipLoader color="white" loading={true} css="" size={160} />}
			<div className="list-wrap">
				<div className="list">
					{cardList.map((card, i) => (
						<StockList
							card={card}
							exchange={card.exchange}
							region={card.region}
							shortName={card.shortName}
							fullExchangeName={card.fullExchangeName}
							exchangeTimezoneName={card.exchangeTimezoneName}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
