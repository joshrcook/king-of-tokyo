import React, { useContext } from 'react';
import PlayerButton from './components/PlayerButton';
import config from '../../config';

function GameStart() {
	const { minPlayers, maxPlayers } = config;
	const playerOptions = Array(maxPlayers - minPlayers + 1).fill(0).map((el, i) => { 
		return i + minPlayers;
	});

	const playerButtons = playerOptions.map((i) => {
		return <PlayerButton number={i} key={i} />;
	});

	return (
		<div>
			<h1>Welcome to King of Tokyo</h1>
			<h3>Please select the number of players</h3>
			{playerButtons}
		</div>
	);
}

export default GameStart;