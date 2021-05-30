import Link from 'next/link'
import navStyles from '../styles/Navbar.module.scss'

const Navbar = () => {
	return (
		<div>
			<div className={navStyles.header}>
				<div className={navStyles.titleName}>
					<Link href="#">Harvey Bates</Link>
				</div>
				<div className={navStyles.companyName}>
					<Link href="#">HB Scientific</Link>
				</div>
				<div className={navStyles.navbar}>
					<Link href="#">Home</Link>
					<Link href="#">About</Link>
					<Link href="#">Blog</Link>
					<Link href="#">Knowledge</Link>
					<Link href="#">Publications</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
