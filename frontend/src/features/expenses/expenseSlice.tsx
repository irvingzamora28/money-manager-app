import { createAsyncThunk, createSlice, Dispatch, Middleware, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ErrorResponseInterface } from "../../interfaces/ErrorResponseInterface";
import ExpenseInterface from "../../interfaces/ExpenseInterface";
import ExpenseStateInterface from "../../interfaces/ExpenseStateInterface";
import expenseService from "./expenseService";

const initialState: ExpenseStateInterface = {
	expenses: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	error: { message: "" },
	success: { message: "" },
};

const createExpense = createAsyncThunk<
	// Return type of the payload creator
	ExpenseInterface,
	// First argument to the payload creator
	ExpenseInterface,
	{
		// Optional fields for defining thunkApi field types
		state: RootState;
		rejectValue: ErrorResponseInterface;
	}
>("expenses/create", async (expenseData: ExpenseInterface, { getState, rejectWithValue }) => {
	try {
		const token = getState().auth.user?.token ?? "";
		const result = await expenseService.createExpense(expenseData, token);
		return result;
	} catch (error: any) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return rejectWithValue({ message: message } as ErrorResponseInterface);
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
			.addCase(
				createExpense.fulfilled,
				(state: ExpenseStateInterface, action: PayloadAction<ExpenseInterface>) => {
					state.isLoading = false;
					state.expenses?.push(action.payload);
					state.isSuccess = true;
					state.success.message = "Expense created successfully";
				}
			)
			.addCase(
				createExpense.rejected,
				(state: ExpenseStateInterface, action: PayloadAction<ErrorResponseInterface | undefined>) => {
					state.isLoading = false;
					state.isError = true;
					state.expenses = null;
					if (action.payload) {
						state.error.message = action.payload.message;
					}
				}
			);
	},
});

export const { reset } = expenseSlice.actions;
export { createExpense };
export default expenseSlice.reducer;
