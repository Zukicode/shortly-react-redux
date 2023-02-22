import React, { useEffect, useState } from 'react';

//Style
import style from './ShortLink.module.scss';

//Components
import { Input } from './Input/Input';
import { ItemLink } from './ItemLink/ItemLink';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchGetShortLink,
	onChangeInput,
	setLinksFromLocalStorage,
} from 'redux/slices/linkSlice';

export const ShortLink = () => {
	const dispatch = useDispatch();
	const { value, links } = useSelector(state => state.links);
	const [activeError, setActiveError] = useState(false);

	useEffect(() => {
		if (sessionStorage.getItem('links')) {
			dispatch(
				setLinksFromLocalStorage(JSON.parse(sessionStorage.getItem('links')))
			);
		}
	}, []);

	const handleClick = () => {
		if (value === '') {
			setActiveError(true);
		} else {
			setActiveError(false);
			dispatch(fetchGetShortLink(value));
			dispatch(onChangeInput(''));
		}
	};

	return (
		<div>
			<div className={style.content}>
				<Input activeError={activeError} setActiveError={setActiveError} />
				<button onClick={handleClick}>Shorten It!</button>
			</div>

			<div className={style.itemLinks}>
				{links.map(link => (
					<ItemLink key={link.code} {...link} />
				))}
			</div>
		</div>
	);
};
