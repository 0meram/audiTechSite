import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./home.css";

const useStyles = makeStyles({
	root: {
		maxWidth: 325,
		margin: 10,
		overflow: "hidden",
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default function Search(props) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const obj = {
		hi: "hi",
		shalom: {},
		who: "who"
	}

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
				<h3>time zone: {props.exchangeTimezoneName}</h3>
				<p>{props.fullExchangeName}</p>
				<CardActionArea>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							padding: 10,
						}}
					>
						<div>
							<Typography variant="body2" color="textSecondary" component="p">
								{props.regularMarketChangePercent}
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
					<Card className={classes.root} key={props.key} onClick={handleClose}>
						{/* {Object.keys(props.card).map(
							(item, i, value) => (
								(value = props.card[item]),
								console.log("~ value", value),
								(
									<li key={i}>
										<span>
											{i} {item}: {!item == {} ? "value" : null}
										</span>
									</li>
								)
							)
						)} */}
						{Object.keys(obj).map(
							(item, i, value) => (
								(value = obj[item]),
								console.log("~ value", value),
								console.log('~ typeof value === "object"', typeof value === "object"),
									(
										<li key={i}>
											<span>
												{/* {i} {item}: {value || "hi"} */}
												{i} {item}: {typeof value === "object" && null}
											</span>
										</li>
									)
							)
						)}
						<CardActionArea>
							<Button size="small" variant="outlined" onClick={handleOpen}>
								Close
							</Button>
						</CardActionArea>
					</Card>
				</Fade>
			</Modal>
		</div>
	);
}
