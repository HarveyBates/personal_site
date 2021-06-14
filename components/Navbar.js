import Link from 'next/link'
import navStyles from '../styles/Navbar.module.scss'

const Navbar = () => {
	return (
		<div>
			<div className={navStyles.header}>
				<div className={navStyles.titleName}>
					<Link href="/">Harvey Bates</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
