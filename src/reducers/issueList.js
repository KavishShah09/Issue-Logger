const initialState = [
	{
		id: 0,
		title: 'lorem ipsum',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
		detail:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, at cupiditate repudiandae cum alias eligendi        hic saepe, quis ex explicabo officiis beatae sapiente expedita facere dicta temporibus distinctio et possimus.',
		tags: ['urgent', 'bug'],
		isResolved: false
	},
	{
		id: 1,
		title: 'lorem ipsum',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
		detail:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, at cupiditate repudiandae cum alias eligendi        hic saepe, quis ex explicabo officiis beatae sapiente expedita facere dicta temporibus distinctio et possimus.',
		tags: ['urgent', 'bug', 'important'],
		isResolved: true
	}
];

const issueListReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'ADD_ISSUE':
			return [...state, payload];
		case 'TOGGLE_ISSUE':
			return state.map(issue => {
				if (issue.id !== payload) {
					return issue;
				}
				return {
					...issue,
					isResolved: !issue.isResolved
				};
			});
		case 'DELETE_ISSUE':
			return state.filter(issue => issue.id !== payload);
		default:
			return state;
	}
};

export default issueListReducer;
