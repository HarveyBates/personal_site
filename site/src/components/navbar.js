import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import React from 'react';
import MindMap from "../views/mind-map"
import App from "../App.js"
import './navbar.css';

export class Navbar extends React.Component {
	constructor(){
		super();
		this.state = {
			arr: [
				{name: "mindmap", isActive: false},
				{name: "arduino", isActive: false},
				{name: "bash", isActive: false},
				{name: "c++", isActive: false},
				{name: "docker", isActive: false},
				{name: "git", isActive: false},
				{name: "pandoc", isActive: false},
				{name: "python", isActive: false},
				{name: "rpi", isActive: false},
				{name: "tmux", isActive: false},
				{name: "vim", isActive: false}
			]
		};
	}

	handleState = (index) => {
		let tmp = this.state.arr;
		if (index === 0 && tmp[index].isActive){
			for (let i = 1; i < tmp.length; i++) {
				tmp[i].isActive = false;
			}
		}
		tmp[index].isActive = !tmp[index].isActive;
		this.setState({
			arr: this.state.arr
		})
	}


	render() {
		return (
			<BrowserRouter>
				<div className="header">
					<div className="titleName">
						<Link to="/">Harvey Bates</Link>
					</div>
				</div>
				<div className="navbar">
					<ul className="navlinks">
						<Link to="/">Home</Link>
						<button onClick={() => this.handleState(0)}>Mind-map</button>
						<div className="subitems">

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(1)}>Arduino</button> : null}
							<div className="subsubitems">
								{this.state.arr[1].isActive ? <Link to="../views/mind-map/arduino/cli">CLI</Link> : null}
								{this.state.arr[1].isActive ? <Link to="../views/mind-map/arduino/lorawan">LoRaWAN</Link> : null}
								{this.state.arr[1].isActive ? <Link to="../views/mind-map/arduino/platformio">PlatformIO</Link> : null}
							</div>

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(2)}>Bash</button> : null}
							<div className="subsubitems">
								{this.state.arr[2].isActive ? <Link to="../views/mind-map/bash/miscellaneous">Miscellaneous</Link> : null}
								{this.state.arr[2].isActive ? <Link to="../views/mind-map/bash/searching">Searching</Link> : null}
								{this.state.arr[2].isActive ? <Link to="../views/mind-map/bash/web">Web</Link> : null}
							</div>

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(3)}>C++</button> : null}
							<div className="subsubitems">
								{this.state.arr[3].isActive ? <Link to="../views/mind-map/c++/cmake">CMake</Link> : null}
								{this.state.arr[3].isActive ? <Link to="../views/mind-map/c++/cpm-make">CPM Make</Link> : null}
								{this.state.arr[3].isActive ? <Link to="../views/mind-map/c++/json">JSON</Link> : null}
							</div>

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(4)}>Docker</button> : null}
							<div className="subsubitems">
								{this.state.arr[4].isActive ? <Link to="../views/mind-map/docker/commands">Commands</Link> : null}
							</div>

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(5)}>Git</button> : null}
							<div className="subsubitems">
								{this.state.arr[5].isActive ? <Link to="../views/mind-map/git/commands">Commands</Link> : null}
							</div>

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(6)}>Pandoc</button> : null}
							<div className="subsubitems">
								{this.state.arr[6].isActive ? <Link to="../views/mind-map/pandoc/commands">Commands</Link> : null}
							</div>

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(7)}>Python</button> : null}
							<div className="subsubitems">
								{this.state.arr[7].isActive ? <Link to="../views/mind-map/python/dates">Dates</Link> : null}
								{this.state.arr[7].isActive ? <Link to="../views/mind-map/python/numpy">Numpy</Link> : null}
								{this.state.arr[7].isActive ? <Link to="../views/mind-map/python/pandas">Pandas</Link> : null}
								{this.state.arr[7].isActive ? <Link to="../views/mind-map/python/plotting">Plotting</Link> : null}
								{this.state.arr[7].isActive ? <Link to="../views/mind-map/python/requests">Requests</Link> : null}
							</div>

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(8)}>Raspberry Pi</button> : null}
							<div className="subsubitems">
								{this.state.arr[8].isActive ? <Link to="../views/mind-map/rpi/webserver">Web Server</Link> : null}
							</div>

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(9)}>Tmux</button> : null}
							<div className="subsubitems">
								{this.state.arr[9].isActive ? <Link to="../views/mind-map/tmux/bindings">Key Bindings</Link> : null}
								{this.state.arr[9].isActive ? <Link to="../views/mind-map/tmux/config">Configuration</Link> : null}
							</div>

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(10)}>Vim</button> : null}
							<div className="subsubitems">
								{this.state.arr[10].isActive ? <Link to="../views/mind-map/vim/bindings">Key Bindings</Link> : null}
							</div>

						</div>
						<Link to="/">Publications</Link>
						<Link to="/">About</Link>
						<Link to="/">Contact</Link>
					</ul>
				</div>
				<Routes>
					<Route path="/" element={<App/>}/>

					<Route path="/views/mind-map/arduino/cli" element={<MindMap folder="arduino" name="CLI"/>}/>
					<Route path="/views/mind-map/arduino/lorawan" element={<MindMap folder="arduino" name="LoRaWAN"/>}/>
					<Route path="/views/mind-map/arduino/platformio" element={<MindMap folder="arduino" name="PlatformIO"/>}/>
					<Route path="/views/mind-map/bash/miscellaneous" element={<MindMap folder="bash" name="Misc"/>}/>
					<Route path="/views/mind-map/bash/searching" element={<MindMap folder="bash" name="Search"/>}/>
					<Route path="/views/mind-map/bash/web" element={<MindMap folder="bash" name="Web"/>}/>
					<Route path="/views/mind-map/c++/cmake" element={<MindMap folder="c++" name="CMake"/>}/>
					<Route path="/views/mind-map/c++/cpm-make" element={<MindMap folder="c++" name="CPMmake"/>}/>
					<Route path="/views/mind-map/c++/json" element={<MindMap folder="c++" name="Json"/>}/>
					<Route path="/views/mind-map/docker/commands" element={<MindMap folder="docker" name="Commands"/>}/>
					<Route path="/views/mind-map/git/commands" element={<MindMap folder="git" name="Commands"/>}/>
					<Route path="/views/mind-map/pandoc/commands" element={<MindMap folder="pandoc" name="Commands"/>}/>
					<Route path="/views/mind-map/python/dates" element={<MindMap folder="python" name="Dates"/>}/>
					<Route path="/views/mind-map/python/numpy" element={<MindMap folder="python" name="Numpy"/>}/>
					<Route path="/views/mind-map/python/pandas" element={<MindMap folder="python" name="Pandas"/>}/>
					<Route path="/views/mind-map/python/plotting" element={<MindMap folder="python" name="Plotting"/>}/>
					<Route path="/views/mind-map/python/requests" element={<MindMap folder="python" name="Requests"/>}/>
					<Route path="/views/mind-map/rpi/webserver" element={<MindMap folder="raspberry-pi" name="Webserver"/>}/>
					<Route path="/views/mind-map/tmux/bindings" element={<MindMap folder="tmux" name="Bindings"/>}/>
					<Route path="/views/mind-map/tmux/config" element={<MindMap folder="tmux" name="Config"/>}/>
					<Route path="/views/mind-map/vim/bindings" element={<MindMap folder="vim" name="Shortcuts"/>}/>
				</Routes>
			</BrowserRouter>
		)
	}
}
