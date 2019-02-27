import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import GameContext from '../../../../context/Game';


function PlayerButton(props) {
	const [gameState, updateGameState] = useContext(GameContext);
	const { number } = props;

	const updateNumPlayers = () => {
		updateGameState({
			numPlayers: number
		});
	}

	return (
		<Button 
			variant="contained" 
			color="primary" 
			key={number}
			onClick={updateNumPlayers}
		>{number}</Button>
	);
}

export default PlayerButton;