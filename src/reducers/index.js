import issueListReducer from './issueList';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	issueList: issueListReducer
});

export default rootReducer;
