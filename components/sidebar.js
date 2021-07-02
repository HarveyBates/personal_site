import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function SideBar({Programming, Modeling, Electronics, Strava}){
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
		</div>
	);
}

