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
		</div>
	);
}
