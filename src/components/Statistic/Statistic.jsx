import React from 'react';

//Style
import style from './Statistic.module.scss';

//Components
import { Container } from 'components/Container/Container';
import { ShortLink } from 'components/ShortLink/ShortLink';
import { Detalies } from './Detalies/Detalies';

export const Statistic = () => {
	return (
		<div className={style.backgroundParent}>
			<Container>
				<div className={style.content}>
					<ShortLink />
					<Detalies />
				</div>
			</Container>
		</div>
	);
};
