import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar.js';
import SideBar from '../components/sidebar.js';

const Layout = ({children}) => {
	return (
		<div>
			<Navbar />
			<div className={styles.container}>
				<main className={styles.main}>
					{children}
				</main>
			</div>
		</div>
	)
}

export default Layout
