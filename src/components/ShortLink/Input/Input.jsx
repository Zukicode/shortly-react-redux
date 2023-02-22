import React from 'react';

//Style
import style from './Input.module.scss';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { onChangeInput } from 'redux/slices/linkSlice';

export const Input = ({ activeError, setActiveError }) => {
	const dispatch = useDispatch();
	const { value } = useSelector(state => state.links);

	const handleChange = e => {
		setActiveError(false);
		dispatch(onChangeInput(e.target.value));
	};

	return (
		<div className={style.content}>
			<input
				type='text'
				value={value}
				onChange={handleChange}
				placeholder='Shorten a link here...'
				className={activeError ? `${style.input} ${style.error}` : style.input}
			/>
			{activeError && <p>Please add a link</p>}
		</div>
	);
};
