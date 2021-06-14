import React, {useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fs from 'fs'; // File system
import Link from 'next/link';
import path from 'path';
import Image from 'next/image';

export default function Home({Programming, Modeling, Electronics, Strava}) {
	var totalSwim = 0;
	var totalBike = 0;
	var totalRun = 0;
	Strava.map(activity => {
		if(activity.type == "Swim"){
			totalSwim += activity.distance;	
		}
		else if(activity.type == "Bike" || activity.type == "VirtualRide"){
			totalBike += activity.distance;
		}
		else if(activity.type == "Run" || activity.type == "VirtualRun"){
			totalRun += activity.distance;
		}
	});
	totalSwim = (totalSwim / 1000).toFixed(2);
	totalBike = (totalBike / 1000).toFixed(2);
	totalRun = (totalRun / 1000).toFixed(2);
	return (
		<div className={styles.page}>
			<div className={styles.sidebar}>
				<Head>
					<title>Harvey Bates</title>
				</Head>
				<div className={styles.sport_card}>
					<h3>Weekly Activity Totals</h3>
					<div className={styles.sport_row}>
						<div className={styles.sport_activity}>
							<Image src="/swimming.png" alt="cycling" width={32}
								height={32}/>
							<h5>{totalSwim} km</h5>
						</div>
						<div className={styles.sport_activity}>
							<Image src="/cycling.png" alt="cycling" width={32}
								height={32}/>
							<h5>{totalBike} km</h5>
						</div>
						<div className={styles.sport_activity}>
							<Image src="/running.png" alt="cycling" width={32}
								height={32}/>
							<h5>{totalRun} km</h5>
						</div>
					</div>
				</div>
				<hr className={styles.sidebar_divider}></hr>
				<div className={styles.knowledge}>
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
			</div>
			<div className={styles.content}>
				<div className={styles.publications_card}>
					<div className={styles.publications_text}>
						<h4>The Phenobottle, an open-source photobioreactor platform for environmental simulation</h4>
						<h5>Harvey Bates, Alonso Zavafer, Milán Szabó & Peter J. Ralph</h5>
						<p>Microalgal biotechnologies have great potential for biofuels, bioremediation, food technologies and more recently the production of pharmaceuticals. However, a major obstacle to use microalgae industrially is the optimisation of environmental parameters to the microalgal species of interest (light, CO2 availability, nutrients, etc.). If one aims to optimise productivity, the use of photobioreactors (PBRs) is essential. However, the restrictive design of the few commercial bioreactors and their elevated costs (> $10,000 USD ea.) prevents their use as a mainstream tool. To propel microalgal research we present the Phenobottle, a fully customizable open-source PBR platform (consisting of hardware and software). As the optimisation of photosynthesis is a central process to increasing the productivity of microalgae, the Phenobottle is equipped with a chlorophyll a fluorometer and growth sensors to probe metabolic performance in near-real time. An introductory guide is provided and the Phenobottle's sensors are benchmarked against commercial instruments using the model green alga Chlorella vulgaris.</p>
						<Link key="phenobottle-doi" href="https://doi.org/10.1016/j.algal.2020.102105">
							<a>Read Publication</a>
						</Link>
					</div>
					<div className={styles.publications_img}>
						<Image src="/phenobottle.png" alt="cycling" width={300}
							height={300}/>
					</div>
				</div>
			</div>
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
	
	const stravaRefreshToken = "https://www.strava.com/oauth/token?client_id=" + process.env.STRAVA_ID + "&client_secret=" + process.env.STRAVA_SECRET + "&refresh_token=" + process.env.STRAVA_REFRESH + "&grant_type=refresh_token";
	const stravaGetAccess = await fetch(stravaRefreshToken, {
		method: "POST"
	}).then(response => response.json()).catch(error => console.log(error));

	// Use new refresh token to access data
	const currentTime = new Date().getTime() / 1000; // Convert to epoch time to seconds
	const weekAgoTime = currentTime - 604800; // One week ago is 604800
	const stravaWeeklyTotals = "https://www.strava.com/api/v3/athlete/activities?before=" + currentTime + "&after=" + weekAgoTime;
	const stravaRequest = await fetch(stravaWeeklyTotals, {
		method: "GET",
		headers: {"Authorization": "Bearer " + stravaGetAccess.access_token}
	}).then(response => response.json()).catch(error => console.log(error));
	

	return {
		props: {
			Programming: programmingMdFiles.map(fileName => fileName.replace(".md", "")),
			Modeling: modelingMdFiles.map(fileName => fileName.replace(".md", "")),
			Electronics: electronicsMdFiles.map(fileName => fileName.replace(".md", "")),
			Strava: stravaRequest
		},
	}
}

