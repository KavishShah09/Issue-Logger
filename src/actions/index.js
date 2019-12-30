export const addIssue = payload => ({
	type: 'ADD_ISSUE',
	payload: {
		title: payload.title,
		description: payload.description,
		detail: payload.detail,
		tags: payload.tags,
		isResolved: false
	}
});

export const toggleIssue = payload => ({
	type: 'TOGGLE_ISSUE',
	payload: payload
});

export const deleteIssue = payload => ({
	type: 'DELETE_ISSUE',
	payload: payload
});
