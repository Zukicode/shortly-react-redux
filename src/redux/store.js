import { configureStore } from '@reduxjs/toolkit';
import linkSlice from './slices/linkSlice';

export const store = configureStore({
	reducer: {
		links: linkSlice,
	},
});
