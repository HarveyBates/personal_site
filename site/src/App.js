import React from 'react';
import './App.css';

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			file: ""
		}
	}

	async componentDidMount(){
		try{
			const url = "/mind-map/arduino/CLI.md ";
			var res = await fetch(url);
			var file = await res.text();
			this.setState({
				file: file
			});
		} catch(e){
			console.log(e);
		}
	}

	render() {
		return (
			<div>
			</div>
		)
	}
}
