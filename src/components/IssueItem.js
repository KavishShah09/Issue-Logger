import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleIssue, deleteIssue } from '../actions';

export default function IssueItem({ issue, index }) {
	const dispatch = useDispatch();

	return (
		<div style={issueStyle}>
			<h3 style={{ textDecoration: issue.isResolved ? 'line-through' : 'none' }}>
				{issue.isResolved ? (
					<input type="checkbox" style={{ marginRight: 5 }} onChange={() => dispatch(toggleIssue(issue.id))} checked />
				) : (
					<input type="checkbox" style={{ marginRight: 5 }} onChange={() => dispatch(toggleIssue(issue.id))} />
				)}
				{issue.title} {issue.tags.join(', ')}
				<button style={btnStyle} onClick={() => dispatch(deleteIssue(issue.id))}>
					X
				</button>
			</h3>
			{issue.isResolved ? <p>This Issue Has Been Resolved</p> : <p>Description: {issue.description}</p>}
		</div>
	);
}

const issueStyle = {
	background: '#5a5a97',
	padding: '10px',
	border: '1px #8b9ad3 solid',
	color: '#fff',
	fontSize: 'large'
};

const btnStyle = {
	background: '#0f0f41',
	color: '#fff',
	padding: '5px 9px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
};
