import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";

//import Ratings from "react-ratings-declarative";

export default class StarRating extends Component {
	constructor() {
		super();

		this.state = {
			rating: 1
		};
	}

	onStarHover(nextValue, prevValue, name) {
		this.setState({ rating: nextValue });
	}

	render() {
		const { rating } = this.state;
		return (
			<div className="star-rating">
				<StarRatingComponent
					emptyStarColor="#AAA"
					name="rate"
					starCount={5}
					value={rating}
					onStarHover={this.onStarHover.bind(this)}
				/>
			</div>
		);
	}
}

// import React from 'react';
// import Rating from '@material-ui/lab/Rating';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     '& > * + *': {
//       marginTop: theme.spacing(1),
//     },
//   },
// }));

// export default function HalfRating() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
//       <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
//     </div>
//   );
// }
