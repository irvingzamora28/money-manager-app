import { createAsyncThunk, createSlice, Dispatch, Middleware } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import AuthStateInterface from "../../interfaces/AuthStateInterface";
import expenseService from "./expenseService";

const initialState = {
	expenses: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

type AsyncThunkConfig = {
	/** return type for `thunkApi.getState` */
	state?: AuthStateInterface
	
  }

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
  state: AuthStateInterface
}
>("expenses/create", async (expenseData: any, thunkAPI) => {
	try {
		const token = thunkAPI.getState().user?.token
		console.log(token);
		
		const result = await expenseService.createExpense(expenseData, "token");
		return result;
	} catch (error: any) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

const expenseSlice = createSlice({
	name: "expense",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
});

export const { reset } = expenseSlice.actions;
export { createExpense };
export default expenseSlice.reducer;
