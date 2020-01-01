import React from 'react';
import './App.css';
import Header from './components/Header';
import Issues from './components/Issues';
import AddIssueForm from './components/AddIssueForm';
import IssueDetail from './components/IssueDetail';
import About from './components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Route
					exact
					path="/"
					render={props => (
						<React.Fragment>
							<AddIssueForm />
							<Issues />
						</React.Fragment>
					)}
				/>
				<Route path="/:id" component={IssueDetail} />
				<Route path="/about" component={About} />
			</div>
		</Router>
	);
}

export default App;
