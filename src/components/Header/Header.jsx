import { Container } from 'components/Container/Container';
import React, { useState } from 'react';

//Style
import style from './Header.module.scss';

//Components
import { Menu } from './Menu';

export const Header = () => {
	const [activeMenu, setActiveMenu] = useState(false);

	const toggleMenu = () => setActiveMenu(!activeMenu);

	return (
		<Container>
			<div className={style.header}>
				<div className={style.headerLeftSection}>
					<h1>Shortly</h1>

					<ul>
						<li>
							<a>Features</a>
						</li>
						<li>
							<a>Pricing</a>
						</li>
						<li>
							<a>Resources</a>
						</li>
					</ul>
				</div>

				<div className={style.headerRightSection}>
					<button
						onClick={toggleMenu}
						className={activeMenu ? style.activeMenuButton : style.menuButton}
					></button>
					<button className={style.login}>Login</button>
					<button className={style.signUp}>Sign Up</button>
				</div>

				<Menu activeMenu={activeMenu} />
			</div>
		</Container>
	);
};
