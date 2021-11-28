import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import React from 'react';
import MarkdownRouter from "../views/mind-map"
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
				{name: "vim", isActive: false},
				{name: "blog", isActive: false},
				{name: "pyserial", isActive: false},
				{name: "reflow", isActive: false},
				{name: "science", isActive: false},
				{name: "publications", isActive: false}
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
								{this.state.arr[1].isActive ? <Link to="/mind-map/arduino/cli">CLI</Link> : null}
								{this.state.arr[1].isActive ? <Link to="/mind-map/arduino/lorawan">LoRaWAN</Link> : null}
								{this.state.arr[1].isActive ? <Link to="/mind-map/arduino/platformio">PlatformIO</Link> : null}
							</div>

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(2)}>Bash</button> : null}
							<div className="subsubitems">
								{this.state.arr[2].isActive ? <Link to="/mind-map/bash/miscellaneous">Miscellaneous</Link> : null}
								{this.state.arr[2].isActive ? <Link to="/mind-map/bash/searching">Searching</Link> : null}
								{this.state.arr[2].isActive ? <Link to="/mind-map/bash/web">Web</Link> : null}
							</div>

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(3)}>C++</button> : null}
							<div className="subsubitems">
								{this.state.arr[3].isActive ? <Link to="/mind-map/c++/cmake">CMake</Link> : null}
								{this.state.arr[3].isActive ? <Link to="/mind-map/c++/cpm-make">CPM Make</Link> : null}
								{this.state.arr[3].isActive ? <Link to="/mind-map/c++/json">JSON</Link> : null}
							</div>

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(4)}>Docker</button> : null}
							<div className="subsubitems">
								{this.state.arr[4].isActive ? <Link to="/mind-map/docker/commands">Commands</Link> : null}
							</div>

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(5)}>Git</button> : null}
							<div className="subsubitems">
								{this.state.arr[5].isActive ? <Link to="/mind-map/git/commands">Commands</Link> : null}
							</div>

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(6)}>Pandoc</button> : null}
							<div className="subsubitems">
								{this.state.arr[6].isActive ? <Link to="/mind-map/pandoc/commands">Commands</Link> : null}
							</div>

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(7)}>Python</button> : null}
							<div className="subsubitems">
								{this.state.arr[7].isActive ? <Link to="/mind-map/python/dates">Dates</Link> : null}
								{this.state.arr[7].isActive ? <Link to="/mind-map/python/numpy">Numpy</Link> : null}
								{this.state.arr[7].isActive ? <Link to="/mind-map/python/pandas">Pandas</Link> : null}
								{this.state.arr[7].isActive ? <Link to="/mind-map/python/plotting">Plotting</Link> : null}
								{this.state.arr[7].isActive ? <Link to="/mind-map/python/requests">Requests</Link> : null}
							</div>

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(8)}>Raspberry Pi</button> : null}
							<div className="subsubitems">
								{this.state.arr[8].isActive ? <Link to="/mind-map/rpi/webserver">Web Server</Link> : null}
							</div>

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(9)}>Tmux</button> : null}
							<div className="subsubitems">
								{this.state.arr[9].isActive ? <Link to="/mind-map/tmux/bindings">Key Bindings</Link> : null}
								{this.state.arr[9].isActive ? <Link to="/mind-map/tmux/config">Configuration</Link> : null}
							</div>

							{this.state.arr[0].isActive ? <button onClick={() => this.handleState(10)}>Vim</button> : null}
							<div className="subsubitems">
								{this.state.arr[10].isActive ? <Link to="/mind-map/vim/bindings">Key Bindings</Link> : null}
							</div>

						</div>
						<button onClick={() => this.handleState(11)}>Blog</button>
							<div className="subitems">
								{this.state.arr[11].isActive ? <Link to="/article/pyserial">PySerial</Link> : null}
								{this.state.arr[11].isActive ? <Link to="/article/reflow-soldering">Reflow Soldering</Link> : null}
								{this.state.arr[11].isActive ? <Link to="/article/problem-solving-science">Science Problem</Link> : null}
							</div>

						<Link to="/publications">Publications</Link>
					</ul>
				</div>
				<Routes>
					<Route path="/" element={<App/>}/>

					<Route path="/mind-map/arduino/cli" element={<MarkdownRouter type="mind-map" folder="arduino" name="CLI"/>}/>
					<Route path="/mind-map/arduino/lorawan" element={<MarkdownRouter type="mind-map" folder="arduino" name="LoRaWAN"/>}/>
					<Route path="/mind-map/arduino/platformio" element={<MarkdownRouter type="mind-map" folder="arduino" name="PlatformIO"/>}/>
					<Route path="/mind-map/bash/miscellaneous" element={<MarkdownRouter type="mind-map" folder="bash" name="Misc"/>}/>
					<Route path="/mind-map/bash/searching" element={<MarkdownRouter type="mind-map" folder="bash" name="Search"/>}/>
					<Route path="/mind-map/bash/web" element={<MarkdownRouter type="mind-map" folder="bash" name="Web"/>}/>
					<Route path="/mind-map/c++/cmake" element={<MarkdownRouter type="mind-map" folder="c++" name="CMake"/>}/>
					<Route path="/mind-map/c++/cpm-make" element={<MarkdownRouter type="mind-map" folder="c++" name="CPMmake"/>}/>
					<Route path="/mind-map/c++/json" element={<MarkdownRouter type="mind-map" folder="c++" name="Json"/>}/>
					<Route path="/mind-map/docker/commands" element={<MarkdownRouter type="mind-map" folder="docker" name="Commands"/>}/>
					<Route path="/mind-map/git/commands" element={<MarkdownRouter type="mind-map" folder="git" name="Commands"/>}/>
					<Route path="/mind-map/pandoc/commands" element={<MarkdownRouter type="mind-map" folder="pandoc" name="Commands"/>}/>
					<Route path="/mind-map/python/dates" element={<MarkdownRouter type="mind-map" folder="python" name="Dates"/>}/>
					<Route path="/mind-map/python/numpy" element={<MarkdownRouter type="mind-map" folder="python" name="Numpy"/>}/>
					<Route path="/mind-map/python/pandas" element={<MarkdownRouter type="mind-map" folder="python" name="Pandas"/>}/>
					<Route path="/mind-map/python/plotting" element={<MarkdownRouter type="mind-map" folder="python" name="Plotting"/>}/>
					<Route path="/mind-map/python/requests" element={<MarkdownRouter type="mind-map" folder="python" name="Requests"/>}/>
					<Route path="/mind-map/rpi/webserver" element={<MarkdownRouter type="mind-map" folder="raspberry-pi" name="Webserver"/>}/>
					<Route path="/mind-map/tmux/bindings" element={<MarkdownRouter type="mind-map" folder="tmux" name="Bindings"/>}/>
					<Route path="/mind-map/tmux/config" element={<MarkdownRouter type="mind-map" folder="tmux" name="Config"/>}/>
					<Route path="/mind-map/vim/bindings" element={<MarkdownRouter type="mind-map" folder="vim" name="Shortcuts"/>}/>

					<Route path="/article/pyserial" element={<MarkdownRouter type="mind-map" folder="articles" name="python-arduino-serial"/>}/>
					<Route path="/article/reflow-soldering" element={<MarkdownRouter type="mind-map" folder="articles" name="reflow-soldering"/>}/>
					<Route path="/article/problem-solving-science" element={<MarkdownRouter type="mind-map" folder="articles" name="science-problem"/>}/>
					<Route path="/publications" element={<MarkdownRouter type="mind-map" folder="publications" name="publications"/>}/>
				</Routes>
			</BrowserRouter>
		)
	}
}
