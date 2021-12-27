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

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Card className={classes.root} key={props.key} onClick={handleOpen}>
				<CardMedia
					className="img-card"
					image={
						props.img ||
						`https://images.unsplash.com/photo-1602979677071-1781b7f40023?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0JTIwYW5kJTIwZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80`
					}
					title="Contemplative Reptile"
				/>
				<CardActionArea>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							padding: 10,
						}}
					>
						<div>
							<b>{props.name}</b>
							<Typography variant="body2" color="textSecondary" component="p">
								{props.status}
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
					{/* <Pet
						card={props.card}
						click={props.showPet}
						name={props.name}
						color={props.color}
						type={props.type}
						key={props.key}
						status={props.status}
						img={props.img}
						weight={props.weight}
						height={props.height}
						diet={props.diet}
						allergies={props.allergies}
						bio={props.bio}
					/> */}
					<h1>hellooooo</h1>
				</Fade>
			</Modal>
		</div>
	);
}
