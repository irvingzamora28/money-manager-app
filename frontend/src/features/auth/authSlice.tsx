import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user") || '""');

const initialState = {
	user: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = "";
		},
	},
	extraReducers: () => {},
});

const reset = authSlice.actions;

export { authSlice, reset };
export default authSlice.reducer;
