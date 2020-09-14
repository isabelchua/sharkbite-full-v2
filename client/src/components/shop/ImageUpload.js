import React, { useState } from "react";

const [file, setFile] = useState("");
const [preview, setPreview] = useState("");

const handleFile = e => {
	const file = e.target.files[0];
	previewFile(file);
};

const handleSubmitFile = e => {
	e.preventDefault();
	if (!preview) return;
	uploadImage(preview);
};

const previewFile = file => {
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onloadend = () => {
		setPreview(reader.result);
	};
};

const uploadImage = async base64EncodedImage => {
	console.log(base64EncodedImage);
	try {
		await fetch("/api/upload", {
			method: "POST",
			body: JSON.stringify({ data: base64EncodedImage }),
			headers: { "Content-type": "application/json" }
		});
	} catch (err) {
		console.error(err);
	}
};

function ImageUpload() {
	return (
		<div>
			<input
				type="file"
				name="image"
				onChange={handleFile}
				value={file}
				className="form-input"
				id=""
			/>
		</div>
	);
}

export default ImageUpload;
