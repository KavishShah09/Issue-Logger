import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className="App-header">
			<Link to="/" style={{ color: 'white' }}>
				<h1>Issues App</h1>
			</Link>
		</header>
	);
}
