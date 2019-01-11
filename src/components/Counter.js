import React, { PropTypes } from 'react';

const Counter = ({ index, score, updatePlayerScore }) => (
	<div className="counter" >
		<button
		className="counter-action decrement"
		onClick={_ => updatePlayerScore(index, -1)}>
		-
		</button>
		<div className="counter-score"> {score} </div>
		<button
		className="counter-action increment"
		onClick={_ => updatePlayerScore(index, 1)}>
		+
		</button>
	</div>
);

	Counter.propTypes = {
		updatePlayerScore: PropTypes.func.isRequired,
		index: PropTypes.number.isRequired,
		score: PropTypes.number.isRequired
	};

export default Counter;
