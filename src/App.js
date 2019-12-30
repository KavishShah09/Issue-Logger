import React from 'react';
import './App.css';
import Issues from './components/Issues';
import AddIssueForm from './components/AddIssueForm';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Issues Page</h1>
			</header>
			<AddIssueForm />
			<Issues />
			{/* <p className="App-info">Click on any issue to see details</p> */}
		</div>
	);
}

export default App;
