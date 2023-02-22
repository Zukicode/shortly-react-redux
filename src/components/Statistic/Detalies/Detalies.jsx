import React from 'react';

//Style
import style from './Detalies.module.scss';

//Image
import BrandImage from 'assets/images/icon-brand-recognition.svg';
import RecordsImage from 'assets/images/icon-detailed-records.svg';
import CustomizableImage from 'assets/images/icon-fully-customizable.svg';

export const Detalies = () => {
	return (
		<div className={style.content}>
			<div className={style.title}>
				<h1>Advanced Statistics</h1>
				<p>
					Track how your links are performing across the web with <br /> our
					advanced statistic dashboard.
				</p>
			</div>

			<div className={style.cards}>
				<div className={style.card}>
					<div className={style.cardImage}>
						<img src={BrandImage} alt='card-1' />
					</div>
					<h1>Brand Recognition</h1>
					<p>
						Boost your brand recognition with each click. Generic links don't
						mean a thing. Branded links help instill confidence in your content.
					</p>
				</div>
				<div className={style.line}></div>
				<div className={style.card}>
					<div className={style.cardImage}>
						<img src={RecordsImage} alt='card-2' />
					</div>
					<h1>Detailed Records</h1>
					<p>
						Gain insights into who is clicking your links. Knowing when and
						where people engage with your content hepls inform better decisions.
					</p>
				</div>
				<div className={style.line}></div>
				<div className={style.card}>
					<div className={style.cardImage}>
						<img src={CustomizableImage} alt='card-3' />
					</div>
					<h1>Fully Customizable</h1>
					<p>
						Improve brand wareness and content discoverability through
						customizable links, supercharging audience engagement.
					</p>
				</div>
			</div>
		</div>
	);
};
