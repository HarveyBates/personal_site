import React, {useState} from 'react'
import fs from 'fs'; // File system
import path from 'path';
import SideBar from '../components/sidebar.js';

export default function Home({Programming, Modeling, Electronics, Strava}) {
	return (
		<div>
			<SideBar Programming={Programming} Modeling={Modeling} Electronics={Electronics} Strava={Strava}/>
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


