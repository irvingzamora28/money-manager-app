import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import AuthStateInterface from "../../interfaces/AuthStateInterface";
import UserInterface from "../../interfaces/UserInterface";
import authService from "./authService";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user") || '""');

const initialState: AuthStateInterface = {
	user: user ? user : null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

// Register user
const register = createAsyncThunk("auth/register", async (user: UserInterface, thunkAPI) => {
	try {
		const result = await authService.register(user);
		return result;
	} catch (error: any) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

const login = createAsyncThunk("auth/login", async (user: UserInterface, thunkAPI) => {
	try {
		const result = await authService.login(user);
		return result;
	} catch (error: any) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

const logout = createAsyncThunk("auth/logout", async () => {
	await authService.logout();
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
			.addCase(logout.fulfilled, (state: AuthStateInterface) => {
				state.user = null;
			})
			.addCase(register.pending, (state: AuthStateInterface) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state: AuthStateInterface, action: PayloadAction<UserInterface>) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			// TODO: Set correct error type message
			.addCase(register.rejected, (state, action: PayloadAction<any>) => {
				state.isLoading = false;
				state.isError = true;
				state.user = null;
				if (action.payload) {
					state.message = action.payload;
				}
			})
			.addCase(login.pending, (state: AuthStateInterface) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state: AuthStateInterface, action: PayloadAction<UserInterface>) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
                state.message = "Logged in successfully"
			})
			// TODO: Set correct error type message
			.addCase(login.rejected, (state, action: PayloadAction<any>) => {
				state.isLoading = false;
				state.isError = true;
				state.user = null;
				if (action.payload) {
					state.message = action.payload;
				}
			});
	},
});

// const reset = authSlice.actions;
export const { reset } = authSlice.actions;

export { authSlice, register, login, logout };
export default authSlice.reducer;
