import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fs from 'fs'; // File system
import Link from 'next/link';
import path from 'path';

export default function Home({weatherInfo, postTitle}) {
	function convertTemp(kTemp){
		return (kTemp - 273.15).toFixed(2);
	}
	const temperature = [];
	const city = [];
	weatherInfo.map(result => {
		temperature.push(convertTemp(result.main.temp));
		city.push(result.name);
	});
	return (
		<div>
			<Head>
				<title>Harvey Bates</title>
			</Head>
			<div>
				{temperature.map((value, index) => ( 
					<h3 key={value}>The temperature in {city[index]} is {value}&deg;C</h3>
				))}
			</div>
			{postTitle.map(post => {
				return (
				<div key={post}>
					<Link key={post} href={"/knowledge/" + post}>
						<a>{"/knowledge/" + post}</a>
					</Link>
				</div>
				)}
			)};
		</div>
	);
}

export const getStaticProps = async () => {
	// Create an array of async api calls
	const urls = [await
		fetch('https://api.openweathermap.org/data/2.5/weather?q=Orange,AU&appid=71d062acc5b6842bb52acd51dabf4214'),
		await
		fetch('https://api.openweathermap.org/data/2.5/weather?q=Sydney,AU&appid=71d062acc5b6842bb52acd51dabf4214'),
		await
		fetch('https://api.openweathermap.org/data/2.5/weather?q=Griffith,AU&appid=71d062acc5b6842bb52acd51dabf4214')];
	
	// Preform async api calls
	const weather = await Promise.all(urls);
	// Convert each call to a json object 
	const weatherJSON = await Promise.all(weather.map(async (result) => {
		const output = await result.json(); 
		return output;
	}));
	// Add links to knowledge
	const files = fs.readdirSync('knowledge');
	const markdownFiles = files.filter(file => path.extname(file) === ".md");
	return {
		props: {
			weatherInfo: weatherJSON,
			postTitle: markdownFiles.map(fileName => fileName.replace(".md", ""))
		}
	}
}

