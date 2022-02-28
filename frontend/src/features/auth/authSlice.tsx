import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user") || '""');

interface AuthState {
	user: any;
	isError: boolean;
	isSuccess: boolean;
	isLoading: boolean;
	message: string;
}

interface UserI {
	name: string;
	email: string;
	password: string;
}

const initialState: AuthState = {
	user: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

// Register user
const register = createAsyncThunk("auth/register", async (user: UserI, thunkAPI) => {
	try {
		return await authService.register(user);
	} catch (error: any) {
        // TODO: Catch error message
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		console.log("Error register message: ");
		console.log(message);

		return thunkAPI.rejectWithValue(message);
	}
});

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
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
            // TODO: Set correct error message
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.user = null;
				state.message = "action.payload";
			});
	},
});

// const reset = authSlice.actions;
export const { reset } = authSlice.actions;

export { authSlice, register };
export default authSlice.reducer;
