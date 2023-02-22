import React from 'react';

import style from './Menu.module.scss';

export const Menu = ({ activeMenu }) => {
	return (
		<div
			style={activeMenu ? { opacity: 1, zIndex: 2 } : { opacity: 0 }}
			className={style.activeMenu}
		>
			<div className={style.navigation}>
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
			<div className={style.buttons}>
				<button>Login</button>
				<button>Sign Up</button>
			</div>
		</div>
	);
};
