import React, { createContext } from 'react';

const GameContext = createContext([
	{
		numPlayers: null,
	}, 
	({ numPlayers }) => {
		console.log('updated!', numPlayers);
	},
]);

export default GameContext;