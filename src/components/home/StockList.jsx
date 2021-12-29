import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import ListSubheader from "@material-ui/core/ListSubheader";
import "./home.css";

const useStyles = makeStyles({
	root: {
		hight: 325,
		width: 220,
		margin: 10,
		padding: 0,
		overflow: "auto",
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		maxHeight: 500,
		overflow: "auto",
		width: 625,
		margin: 30,
		padding: 30,
	},
});

export default function StockList(props) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Card className={classes.root} key={props.key} onClick={handleOpen}>
				<h1>{props.exchange}</h1>
				<h4>{props.exchangeTimezoneName}</h4>
				<span>full name: {props.fullExchangeName}</span>
				<p>region: {props.region}</p>
				<span>shortName: {props.shortName}</span>
				<CardActionArea>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							padding: 10,
						}}
					>
						<div>
							<Typography variant="body2" color="secondary" component="p">
								{props.card.regularMarketChangePercent
									? props.card.regularMarketChangePercent.fmt
									: null}
							</Typography>
						</div>
						<Button size="small" variant="outlined" onClick={handleOpen}>
							See More
						</Button>
					</div>
				</CardActionArea>
			</Card>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 1000,
				}}
			>
				<Fade in={open}>
					<Paper
						className={classes.paper}
						key={props.key}
						onClick={handleClose}
					>
						<h1>{props.exchange}</h1>
						<ListSubheader style={{ background: "gray" }}>
							<h1>{props.exchange}</h1>
						</ListSubheader>
						<List>
							{Object.keys(props.card).map(
								(item, i, value) => (
									(value = props.card[item]),
									(
										<ListItem key={i}>
											<span>
												<b>{item}:</b>{" "}
												{typeof value === "object"
													? Object.keys(value).map((insideValue, index) => {
															return (
																<li>
																	<span>
																		<>{insideValue}:</>
																		{value[insideValue]}
																	</span>
																</li>
															);
													  })
													: value}
											</span>
										</ListItem>
									)
								)
							)}
						</List>
						<CardActionArea>
							<Button size="small" variant="outlined" onClick={handleOpen}>
								Close
							</Button>
						</CardActionArea>
					</Paper>
				</Fade>
			</Modal>
		</div>
	);
}
