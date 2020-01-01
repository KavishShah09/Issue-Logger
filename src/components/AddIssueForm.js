import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIssue } from '../actions';

export default function AddIssueForm() {
	const [issue, setIssue] = useState({
		title: '',
		description: '',
		detail: '',
		tags: []
	});
	let nextIssueId = 3;
	const dispatch = useDispatch();

	const onChange = e => {
		setIssue({ ...issue, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();
		console.log(issue.tags);
		if (issue.title !== '' || issue.description !== '') {
			dispatch(
				addIssue({
					id: nextIssueId++,
					title: issue.title,
					description: issue.description,
					detail: issue.detail,
					tags: issue.tags.replace(/\s+/g, '').split(',')
				})
			);
			setIssue({ title: '', description: '', detail: '', tags: [] });
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} style={{ display: 'flex' }}>
				<input
					type="text"
					name="title"
					placeholder="Add Issue Title..."
					value={issue.title}
					onChange={onChange}
					autoComplete="off"
				/>
				<textarea
					type="text"
					name="description"
					style={{ width: 300 }}
					placeholder="Add Issue Description..."
					value={issue.description}
					onChange={onChange}
					autoComplete="off"
				/>
				<textarea
					type="text"
					name="detail"
					style={{ width: 300 }}
					placeholder="Add Issue Detail..."
					value={issue.detail}
					onChange={onChange}
					autoComplete="off"
				/>
				<input
					type="text"
					name="tags"
					style={{ width: 300 }}
					placeholder="Add Tags... Eg: urgent, bug, danger"
					value={issue.tags}
					onChange={onChange}
					autoComplete="off"
				/>
				<input type="submit" value="Submit" style={btnStyle} />
			</form>
		</div>
	);
}

const btnStyle = {
	background: '#0f0f41',
	color: '#fff',
	padding: '5px 9px',
	cursor: 'pointer',
	float: 'right'
};
