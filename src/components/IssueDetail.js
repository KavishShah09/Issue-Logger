import React from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

export default function IssueDetail({ match }) {
	const issueList = useSelector(state => state.issueList);
	const issueArr = issueList.filter(issue => issue.id == match.params.id);
	const issue = issueArr[0];

	// const dispatch = useDispatch();

	return (
		<div style={issueStyle}>
			<h3>
				{issue.title}
				<span style={tagStyle}>{issue.tags.join(', ')}</span>
			</h3>
			<p>Description: {issue.description}</p>
			<p>Details: {issue.detail}</p>
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

const tagStyle = {
	background: '#0f0f41',
	color: '#fff',
	padding: '7px',
	fontSize: 'large'
};
