import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleIssue, deleteIssue } from '../actions';
import { Link } from 'react-router-dom';

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
				<Link to={`/${issue.id}`} style={issueLinkStyle}>
					{issue.title}
				</Link>
				<span style={tagStyle}>{issue.tags.join(', ')}</span>
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
	fontSize: 'x-large'
};

const issueLinkStyle = {
	color: 'white',
	textDecoration: 'none'
};

const tagStyle = {
	background: '#0f0f41',
	color: '#fff',
	padding: '7px',
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
