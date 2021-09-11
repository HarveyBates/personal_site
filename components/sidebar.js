import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function SideBar({Programming, Modeling, Electronics}){
	return (
		<div className={styles.page}>
			<div className={styles.sidebar}>
				<Head>
					<title>Harvey Bates</title>
				</Head>
				<h2 className={styles.sidebar_header}>Knowledge</h2>
				<div className={styles.knowledge}>
					<h3>Programming</h3>
					<div className={styles.knowledge_items}>
						{Programming.map(post => {
							return (
								<div key={post} className={styles.post}>
						<Link href={"/knowledge/programming/" + post} passHref>
							<a>{post}</a>
						</Link>
					</div>
					);
					})}
				</div>
			</div>
			<div className={styles.knowledge}>
				<h3>Electronics</h3>
				<div className={styles.knowledge_items}>
					{Electronics.map(post => {
						return (
							<div key={post} className={styles.post}>
					<Link href={"/knowledge/electronics/" + post} passHref>
						<a>{post}</a>
					</Link>
				</div>
				);
				})}
			</div>
			<div className={styles.knowledge}>
				<h3>Modeling</h3>
				<div className={styles.knowledge_items}>
					{Modeling.map(post => {
						return (
							<div key={post} className={styles.post}>
					<Link href={"/knowledge/modeling/" + post} passHref>
						<a>{post}</a>
					</Link>
				</div>
				);
				})}
			</div>
		</div>
		</div>
		</div>
		</div>
	);
}

