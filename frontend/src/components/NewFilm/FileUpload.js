import React, {useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

export const FileUpload = props => {
	const [fileName, setFileName] = useState("");
	const [upload, setUpload] = useState();
	const onDrop = useCallback(acceptedFiles => {
		const data = new FormData();
		data.append('file', acceptedFiles[0]);
		setFileName(acceptedFiles[0].name);
		setUpload(data);
	}, [])
	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

	return (
		<div>
			<div {...getRootProps()} className="jumbotron">
				<input {...getInputProps()} />
				{
				isDragActive ?
				  <p>Drop the files here ...</p> :
				  <p>Drag 'n' drop some files here, or click to select files</p>
				}
			</div>
			<p>Uploaded file: <i>{fileName}</i></p>
			<button className="btn btn-primary" onClick={() => props.submit(upload)}>Submit</button>
		</div>
	)
}
