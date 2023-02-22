import React from 'react';

//Copy hook
import { useClipboard } from 'use-clipboard-copy';

//Style
import style from './ItemLink.module.scss';

export const ItemLink = ({ short_link, original_link }) => {
	const clipboard = useClipboard();

	const copyLink = () => clipboard.copy(short_link);

	const redirectLink = () => (window.location.href = original_link);

	return (
		<div className={style.element}>
			<p>{original_link}</p>
			<div className={style.line}></div>
			<div className={style.activeSection}>
				{/* eslint-disable-next-line */}
				<a onClick={redirectLink}>{short_link}</a>
				<button onClick={copyLink}>Copy</button>
			</div>
		</div>
	);
};
