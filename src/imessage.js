import React from 'react';
import Chat from './Chat';
import './imessage.css';
import Sidebar from './Sidebar';

function imessage() {
	return (
		<div className="imessage">
			<Sidebar />
			<Chat />
		</div>
	);
}

export default imessage;
