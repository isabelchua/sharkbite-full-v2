import React, { useState, useEffect, useContext } from "react";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import PostContext from "../context/postContext";
import { useParams } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import IconButton from "@material-ui/core/IconButton";
import ImageIcon from "@material-ui/icons/Image";

function ReviewForm() {
	const [file, setFile] = useState("");
	const [preview, setPreview] = useState("");
	const postContext = useContext(PostContext);

	const { addPost, current, clearPost, updatePost } = postContext;

	const { id } = useParams();

	const [post, setPost] = useState({
		review: "",
		rating: 0,
		image: "",
		shopid: id,
		userid: "1"
	});

	const { review, image, rating } = post;

	useEffect(() => {
		if (current !== null) {
			setPost(current);
		} else {
			setPost({
				review: "",
				rating: 0,
				image: "",
				shopid: id,
				userid: "1"
			});
		}

		//eslint-disable-next-line
	}, [postContext, current]);

	const handleFile = e => {
		const file = e.target.files[0];
		// previewFile(file);
	};

	// const previewFile = file => {
	// 	const reader = new FileReader();
	// 	reader.readAsDataURL(file);
	// 	reader.onloadend = () => {
	// 		setPreview(reader.result);
	// 	};
	// };

	// const uploadImage = async base64EncodedImage => {
	// 	//console.log(base64EncodedImage);
	// 	try {
	// 		await fetch("/api/upload", {
	// 			method: "POST",
	// 			body: JSON.stringify({ data: base64EncodedImage }),
	// 			headers: { "Content-type": "application/json" }
	// 		});
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// };

	const onChange = (e, rate) => {
		//setPost({ ...post, [e.target.name]: e.target.value, rating: rate });
		//setPost(prevPosts => ({ ...prevPosts, rating: rate }));
		const { name, value } = e.target;
		setPost(prevPost => ({ ...prevPost, [name]: value }));
	};

	const onSubmit = e => {
		e.preventDefault();
		if (current === null) {
			//rating = rating1;
			console.log(post);
			addPost(post);
		} else {
			updatePost(post);
		}
		clearPost();
		//console.log(post);
		// if (!preview) return;
		// uploadImage(preview);
	};
	//console.log("rating ");
	//console.log(rating1);

	const [isExpanded, setExpanded] = useState(false);

	function expand() {
		setExpanded(true);
	}

	const clearForm = () => {
		clearPost();
	};

	return (
		<div
			className="review-form"
			style={{ height: isExpanded ? "220px" : "140px" }}
		>
			<form onSubmit={onSubmit}>
				<Avatar src="https://imgur.com/LmpYcOR.jpg" />
				<div className="col">
					<Rating
						name="rating"
						value={rating}
						onChange={onChange}
						precision={0.5}
					/>

					<textarea
						name="review"
						value={review}
						onClick={expand}
						onChange={onChange}
						placeholder="Write a Review"
						rows={isExpanded ? 3 : 1}
						//height={isExpanded ? "100px" : "10px"}
						cols="60"
					></textarea>
					<div className="img-preview-wrap">
						<input
							id="file-upload"
							type="file"
							name="image"
							accept="image/*"
							onChange={handleFile}
							value={file}
							className="file-upload-btn"
							size="2"
							onClick={expand}
						/>
						<label
							aria-label="add image"
							htmlFor="file-upload"
							className="file-upload"
						>
							<IconButton variant="contained" component="span">
								<ImageIcon />
							</IconButton>
						</label>
						{/* <input
						name="image"
						value={image}
						onChange={onChange}
						placeholder="Add image url"
					></input> */}
						{current && (
							<Button
								type="submit"
								variant="contained"
								color="primary"
								className="btn clear"
								onClick={clearForm}
							>
								{" "}
								Clear
							</Button>
						)}{" "}
						<Button
							type="submit"
							variant="contained"
							color="primary"
							className="btn"
							endIcon={<SendIcon className="btn-icon" />}
						>
							{" "}
							{current ? "Update Review" : "Add Review"}
						</Button>
						{preview && (
							<img
								src={preview}
								alt="chosen"
								className="img-preview"
								style={{ height: "70px" }}
							/>
						)}
					</div>
				</div>
			</form>
		</div>
	);
}

export default ReviewForm;
