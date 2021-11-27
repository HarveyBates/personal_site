import React from 'react';
import '../App.css';
import Markdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {tomorrow} from 'react-syntax-highlighter/dist/esm/styles/prism'

export default class MindMap extends React.Component {
	constructor() {
		super();
		this.state = {
			file: "",
			name: ""
		}
	}

	async componentDidMount(){
		try{
			const url = `/mind-map/${this.props.folder}/${this.props.name}.md`;
			var res = await fetch(url);
			var file = await res.text();
			this.setState({
				file: file,
				name: this.props.name
			});
		} catch(e){
			console.log(e);
		}
	}

	static getDerivedStateFromProps(nextProps, prevState){
		if(nextProps.name !== prevState.name || nextProps.folder !== prevState.folder){
			return{
				name: nextProps.name,
				folder: nextProps.folder
			}
		}
		return null;
	}

	async componentDidUpdate(prevProps, prevState){
		if(prevProps.name !== this.state.name || prevProps.folder !== this.state.folder){
			try{
				const url = `/mind-map/${this.props.folder}/${this.props.name}.md`;
				var res = await fetch(url);
				var file = await res.text();
				this.setState({
					file: file,
					name: this.props.name
				});
			} catch(e){
				console.log(e);
			}
		}
	}

	render() {
		if (this.state.file.length === 0){
			return (
				<div/>
			)
		}
		else{
			return (
				<div className="content">
					<Markdown
						children={this.state.file}
						components={{
							code({node, inline, className, children, ...props}) {
								const match = /language-(\w+)/.exec(className || '')
								return !inline && match ? (
									<SyntaxHighlighter
										children={String(children).replace(/\n$/, '')}
										style={tomorrow}
										language={match[1]}
										PreTag="div"/>
								) : (
								<code className={className} {...props}>
									{children}
								</code>
								)
							}
						}}
					/>
				</div>
			)
		}
	}
}
