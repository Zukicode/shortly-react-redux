import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//API
import axios from 'axios';
import { GET_URL_SHORT } from 'config';

export const fetchGetShortLink = createAsyncThunk(
	'link/fetchGetShortLink', // отображается в dev tools и должно быть уникально у каждого Thunk
	async value => {
		const { data } = await axios.get(GET_URL_SHORT(value));
		return data.result;
	}
);

const initialState = {
	links: [],
	value: '',
	status: null,
};

export const linkSlice = createSlice({
	name: 'link',
	initialState,
	reducers: {
		onChangeInput(state, action) {
			state.value = action.payload;
		},

		setLinksFromLocalStorage(state, action) {
			state.links = action.payload;
		},
	},
	extraReducers: {
		[fetchGetShortLink.pending]: state => {
			state.status = 'loading';
		},
		[fetchGetShortLink.fulfilled]: (state, action) => {
			state.status = 'succses';
			state.links.push(action.payload);
			sessionStorage.setItem('links', JSON.stringify(state.links));
		},
		[fetchGetShortLink.rejected]: state => {
			state.status = 'failed';
		},
	},
});

export const { setLinksFromLocalStorage, onChangeInput } = linkSlice.actions;

export default linkSlice.reducer;
