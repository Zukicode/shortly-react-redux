import React from 'react';

//Style
import style from './Footer.module.scss';

//Components
import { Container } from 'components/Container/Container';

//Images
import FacebookImage from 'assets/images/icon-facebook.svg';
import InstagramImage from 'assets/images/icon-instagram.svg';
import PinterestImage from 'assets/images/icon-pinterest.svg';
import TwitterImage from 'assets/images/icon-twitter.svg';

export const Footer = () => {
	return (
		<div className={style.backgroundParent}>
			<Container>
				<div className={style.content}>
					<div className={style.title}>
						<h1>Shortly</h1>
					</div>

					<div className={style.features}>
						<h1>Features</h1>
						<div>
							<a href=''>Link Shortening</a>
							<a href=''>Branded Links</a>
							<a href=''>Analytics</a>
						</div>
					</div>

					<div className={style.resources}>
						<h1>Resources</h1>
						<div>
							<a href=''>Blog</a>
							<a href=''>Developers</a>
							<a href=''>Support</a>
						</div>
					</div>

					<div className={style.company}>
						<h1>Company</h1>
						<div>
							<a href=''>About</a>
							<a href=''>Our Team</a>
							<a href=''>Careers</a>
							<a href=''>Contact</a>
						</div>
					</div>

					<div className={style.socialNetwork}>
						<div className={style.facebookBtn}></div>
						<div className={style.instagramBtn}></div>
						<div className={style.pinterestBtn}></div>
						<div className={style.twitterBtn}></div>
					</div>
				</div>
			</Container>
		</div>
	);
};
