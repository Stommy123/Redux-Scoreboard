import React, { PropTypes } from 'react';

const PlayerDetail = ({ selectedPlayer }) => 
	selectedPlayer ? 
		(
				<div>
					<h3>{selectedPlayer.name}</h3>
					<ul>
						<li>
							<span>Score: </span> 
							{selectedPlayer.score}
						</li>
						<li>
							<span>Created: </span> 
							{selectedPlayer.created}
						</li>
						<li>
							<span>Updated: </span> 
							{selectedPlayer.updated}
						</li>        
					</ul>
				</div>
		)
		: <p>Click on a player to see more details</p>

PlayerDetail.propTypes = {
	selectedPlayer: PropTypes.object
};

export default PlayerDetail;
