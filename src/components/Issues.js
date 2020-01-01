import React from 'react';
import { useSelector } from 'react-redux';
import IssueItem from './IssueItem';

export default function Issue() {
	const issueList = useSelector(state => state.issueList);
	return (
		<div>
			{issueList.map((issue, index) => (
				<IssueItem key={index} issue={issue} />
			))}
			<p className="App-info">Click on any issue to see details</p>
		</div>
	);
}
