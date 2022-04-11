import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
	error: { type: "", message: "" },
	success: { type: "", message: "" },
};

const createExpense = createAsyncThunk<
	ExpenseInterface,
	ExpenseInterface,
	{
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

const getExpenses = createAsyncThunk<
	ExpenseInterface[],
	null,
	{
		state: RootState;
		rejectValue: ErrorResponseInterface;
	}
>("expenses/all", async (_, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user?.token;
		if (token) {
			const result = await expenseService.getExpenses(token);
			return result;
		}
		return [];
	} catch (error: any) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue({ message: message } as ErrorResponseInterface);
	}
});

const deleteExpense = createAsyncThunk<
	ExpenseInterface,
	string,
	{
		state: RootState;
		rejectValue: ErrorResponseInterface;
	}
>("expenses/delete", async (id: string, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user?.token ?? "";
		const result = await expenseService.deleteExpense(id, token);
		return result;
	} catch (error: any) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue({ message: message } as ErrorResponseInterface);
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
			.addCase(createExpense.fulfilled, (state: ExpenseStateInterface, action: PayloadAction<ExpenseInterface>) => {
				state.isLoading = false;
				state.expenses?.push(action.payload);
				state.isSuccess = true;
				state.success.type = "create_expense";
				state.success.message = "Expense created successfully";
			})
			.addCase(createExpense.rejected, (state: ExpenseStateInterface, action: PayloadAction<ErrorResponseInterface | undefined>) => {
				state.isLoading = false;
				state.isError = true;
				state.expenses = null;
				if (action.payload) {
					state.error.type = "create_expense";
					state.error.message = action.payload.message;
				}
			})
			.addCase(getExpenses.pending, (state: ExpenseStateInterface) => {
				state.isLoading = true;
			})
			.addCase(getExpenses.fulfilled, (state: ExpenseStateInterface, action: PayloadAction<ExpenseInterface[]>) => {
				state.isLoading = false;
				state.expenses = action.payload;
			})
			.addCase(getExpenses.rejected, (state: ExpenseStateInterface, action: PayloadAction<ErrorResponseInterface | undefined>) => {
				state.isLoading = false;
				state.isError = true;
				state.expenses = null;
				if (action.payload) {
					state.error.type = "get_expenses";
					state.error.message = action.payload.message;
				}
			})
			.addCase(deleteExpense.pending, (state: ExpenseStateInterface) => {
				state.isLoading = true;
			})
			.addCase(deleteExpense.fulfilled, (state: ExpenseStateInterface, action: PayloadAction<ExpenseInterface>) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.success.message = "Expense deleted successfully";
				if (state.expenses) {
					state.expenses = state.expenses.filter((expense) => expense._id !== action.payload._id);
				}
			})
			.addCase(deleteExpense.rejected, (state: ExpenseStateInterface, action: PayloadAction<ErrorResponseInterface | undefined>) => {
				state.isLoading = false;
				state.isError = true;
				state.expenses = null;
				if (action.payload) {
					state.error.type = "get_expenses";
					state.error.message = action.payload.message;
				}
			});
	},
});

export const { reset } = expenseSlice.actions;
export { createExpense, getExpenses, deleteExpense };
export default expenseSlice.reducer;
