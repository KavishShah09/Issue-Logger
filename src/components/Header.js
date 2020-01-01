import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className="App-header">
			<h1>Issues Page</h1>
			<ul>
				<Link to="/" style={{ color: 'white' }}>
					<li>Issues</li>
				</Link>
				{' || '}
				<Link to="/about" style={{ color: 'white' }}>
					<li>About</li>
				</Link>
			</ul>
		</header>
	);
}
