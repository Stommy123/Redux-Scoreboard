import React, { Component, PropTypes } from 'react';

class Stopwatch extends Component {
	state = {
		running: false,
		previouseTime: 0,
		elapsedTime: 0,    
	};
	
	componentDidMount() { this.interval = setInterval(this.onTick) }

	componentWillUnmount() { clearInterval(this.interval) }
	
	onStart = _ => {
		this.setState({
			running: true,
			previousTime: Date.now(),
		});
	};

	onStop = _ => {
		this.setState({
			running: false,
		});
	};

	onReset = _ => {
		this.setState({
			elapsedTime: 0,
			previousTime: Date.now(),
		});
	};

	onTick = _ => {
		const { running, elapsedTime, previousTime } = this.state;
		if (running) {
			const now = Date.now();
			this.setState({
				elapsedTime: elapsedTime + (now - previousTime),
				previousTime: Date.now(),
			});
		}
	};
	
	render() {
		const { running, elapsedTime } = this.state;
		const seconds = Math.floor(elapsedTime / 1000);
		return (
			<div className="stopwatch" >
				<h2>Stopwatch</h2>
				<div className="stopwatch-time"> {seconds} </div>
				{ running ?
					<button onClick={this.onStop}>Stop</button>
					:
					<button onClick={this.onStart}>Start</button>
				}
				<button onClick={this.onReset}>Reset</button>
			</div>
		)
	} 
}

export default Stopwatch;