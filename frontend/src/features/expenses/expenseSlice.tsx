import { createAsyncThunk, createSlice, Dispatch, Middleware, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import AuthStateInterface from "../../interfaces/AuthStateInterface";
import ExpenseStateInterface from "../../interfaces/ExpenseStateInterface";
import expenseService from "./expenseService";

const initialState: ExpenseStateInterface = {
	expenses: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

type AsyncThunkConfig = {
	/** return type for `thunkApi.getState` */
	state?: AuthStateInterface;
};

//   <
// {
//   state: AuthStateInterface
// }
// >

const createExpense = createAsyncThunk<
	// Return type of the payload creator
	any,
	// First argument to the payload creator
	any,
	{
		// Optional fields for defining thunkApi field types
		state: RootState;
	}
>("expenses/create", async (expenseData: any, { getState, rejectWithValue }) => {
	try {
		const token = getState().auth.user?.token ?? "";
		console.log(token);

		const result = await expenseService.createExpense(expenseData, token);
		console.log("result");
		console.log(result);

		return result;
	} catch (error: any) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return rejectWithValue(message);
	}
});

const expenseSlice = createSlice({
	name: "expense",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createExpense.pending, (state: ExpenseStateInterface) => {
				state.isLoading = true;
			})
			.addCase(createExpense.fulfilled, (state: ExpenseStateInterface, action: PayloadAction<any>) => {
				state.isLoading = false;
				state.expenses?.push(action.payload);
				state.isSuccess = true;
                state.message = "Expense created successfully"
			})
			.addCase(createExpense.rejected, (state: ExpenseStateInterface, action: PayloadAction<any>) => {
				state.isLoading = false;
				state.isError = true;
				state.expenses = null;
				if (action.payload) {
					state.message = action.payload;
				}
			});
	},
});

export const { reset } = expenseSlice.actions;
export { createExpense };
export default expenseSlice.reducer;
