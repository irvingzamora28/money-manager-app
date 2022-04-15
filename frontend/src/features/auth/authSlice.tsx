import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import AuthStateInterface from "../../interfaces/AuthStateInterface";
import { ErrorResponseInterface } from "../../interfaces/ErrorResponseInterface";
import UserInterface from "../../interfaces/UserInterface";
import authService from "./authService";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user") || '""');

const initialState: AuthStateInterface = {
	user: user ? user : null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	error: { type: "", message: "" },
	success: { type: "", message: "" },
};

const register = createAsyncThunk<
	UserInterface,
	UserInterface,
	{ state: RootState; rejectValue: ErrorResponseInterface }
>("auth/register", async (user: UserInterface, thunkAPI) => {
	try {
		const result = await authService.register(user);
		return result;
	} catch (error: any) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue({ message: message } as ErrorResponseInterface);
	}
});

const login = createAsyncThunk<UserInterface, UserInterface, { state: RootState; rejectValue: ErrorResponseInterface }>(
	"auth/login",
	async (user: UserInterface, thunkAPI) => {
		try {
			const result = await authService.login(user);
			return result;
		} catch (error: any) {
			const message =
				(error.response && error.response.data && error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue({ message: message } as ErrorResponseInterface);
		}
	}
);

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
			state.error = { type: "", message: "" };
			state.success = { type: "", message: "" };
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
				state.isError = false;
				state.user = action.payload;
			})
			.addCase(register.rejected, (state, action: PayloadAction<ErrorResponseInterface | undefined>) => {
				state.isLoading = false;
				state.isError = true;
				state.user = null;
				if (action.payload) {
					state.error.message = action.payload.message;
				}
			})
			.addCase(login.pending, (state: AuthStateInterface) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state: AuthStateInterface, action: PayloadAction<UserInterface>) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.isError = false;
				state.user = action.payload;
				console.log("action.payload login");
				console.log(action.payload);
				
				state.success.message = "Logged in successfully";
			})
			.addCase(login.rejected, (state, action: PayloadAction<ErrorResponseInterface | undefined>) => {
				state.isLoading = false;
				state.isError = true;
				state.user = null;
				if (action.payload) {
					state.error.message = action.payload.message;
				}
			});
	},
});

export const { reset } = authSlice.actions;

export { authSlice, register, login, logout };
export default authSlice.reducer;
