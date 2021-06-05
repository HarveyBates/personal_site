import Link from 'next/link'
import navStyles from '../styles/Navbar.module.scss'

const Navbar = () => {
	return (
		<div>
			<div className={navStyles.header}>
				<div className={navStyles.titleName}>
					<Link href="index">Harvey Bates</Link>
				</div>
				<div className={navStyles.navbar}>
					<Link href="#">HB Scientific</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
