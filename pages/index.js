import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fs from 'fs'; // File system
import Link from 'next/link';
import path from 'path';

export default function Home({weatherInfo, Programming, Modeling, Electronics}) {
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
		<div className={styles.wrapper}>
			<Head>
				<title>Harvey Bates</title>
			</Head>

			<div className={styles.knowledge}>
				<h2>Knowledge</h2>
				<h3>Programming</h3>
				{Programming.map(post => {
					return (
						<div key={post} className={styles.post}>
							<Link key={post} href={"/knowledge/programming/" + post}>
								<a>{post}</a>
							</Link>
						</div>
					);
				})}
				<h3>Electronics</h3>
				{Electronics.map(post => {
					return (
						<div key={post} className={styles.post}>
							<Link key={post} href={"/knowledge/electronics/" + post}>
								<a>{post}</a>
							</Link>
						</div>
					);
				})}
				<h3>Modeling</h3>
				{Modeling.map(post => {
					return (
						<div key={post} className={styles.post}>
							<Link key={post} href={"/knowledge/modeling/" + post}>
								<a>{post}</a>
							</Link>
						</div>
					);
				})}
			</div>

			<div className={styles.weather}>
				{temperature.map((value, index) => ( 
					<h3 key={value}>The temperature in {city[index]} is {value}&deg;C</h3>
				))}
			</div>
		</div>
	);
}

export const getStaticProps = async () => {
	// Create an array of async api calls
	const WEATHER_KEY = process.env.WEATHER_KEY;
	const urls = [await
		fetch('https://api.openweathermap.org/data/2.5/weather?q=Orange,AU&appid=' + WEATHER_KEY),
		await
		fetch('https://api.openweathermap.org/data/2.5/weather?q=Sydney,AU&appid=' + WEATHER_KEY),
		await
		fetch('https://api.openweathermap.org/data/2.5/weather?q=Griffith,AU&appid=' + WEATHER_KEY)];
	
	// Preform async api calls
	const weather = await Promise.all(urls);
	// Convert each call to a json object 
	const weatherJSON = await Promise.all(weather.map(async (result) => {
		const output = await result.json(); 
		return output;
	}));
	
	// Add links to knowledge
	const programmingFiles = fs.readdirSync('knowledge/programming');
	const programmingMdFiles = programmingFiles.filter(file => path.extname(file) === ".md");

	const modelingFiles = fs.readdirSync('knowledge/modeling');
	const modelingMdFiles = modelingFiles.filter(file => path.extname(file) === ".md");
	
	const electronicsFiles = fs.readdirSync('knowledge/electronics');
	const electronicsMdFiles = electronicsFiles.filter(file => path.extname(file) === ".md");

	return {
		props: {
			weatherInfo: weatherJSON,
			Programming: programmingMdFiles.map(fileName => fileName.replace(".md", "")),
			Modeling: modelingMdFiles.map(fileName => fileName.replace(".md", "")),
			Electronics: electronicsMdFiles.map(fileName => fileName.replace(".md", ""))
		}
	}
}

