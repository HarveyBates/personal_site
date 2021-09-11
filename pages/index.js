import React, {useState} from 'react'
import fs from 'fs'; // File system
import path from 'path';
import SideBar from '../components/sidebar.js';

export default function Home({Programming, Modeling, Electronics}) {
	return (
		<div>
			<SideBar Programming={Programming} Modeling={Modeling} Electronics={Electronics}/>
		</div>
	);
}

export const getStaticProps = async () => {
	// Add links to knowledge
	const programmingFiles = fs.readdirSync('knowledge/programming');
	const programmingMdFiles = programmingFiles.filter(file => path.extname(file) === ".md");

	const modelingFiles = fs.readdirSync('knowledge/modeling');
	const modelingMdFiles = modelingFiles.filter(file => path.extname(file) === ".md");
	
	const electronicsFiles = fs.readdirSync('knowledge/electronics');
	const electronicsMdFiles = electronicsFiles.filter(file => path.extname(file) === ".md");
	
	return {
		props: {
			Programming: programmingMdFiles.map(fileName => fileName.replace(".md", "")),
			Modeling: modelingMdFiles.map(fileName => fileName.replace(".md", "")),
			Electronics: electronicsMdFiles.map(fileName => fileName.replace(".md", "")),
		},
	}
}


