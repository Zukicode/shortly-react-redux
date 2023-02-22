import React from 'react';

//Style
import style from './GetStarted.module.scss';

//Image
import ImageStarted from 'assets/images/illustration-working.svg';

//Components
import { Container } from 'components/Container/Container';

export const GetStarted = () => {
	return (
		<Container>
			<div className={style.content}>
				<div className={style.text}>
					<h1>
						More than just <br /> shorter links
					</h1>
					<p>
						Build your brand's recognition and get detailed <br />
						insights on how your links are performing.
					</p>
					<button>Get Started</button>
				</div>
				<div className={style.image}>
					<img src={ImageStarted} alt='get-started-img' />
				</div>
			</div>
		</Container>
	);
};
