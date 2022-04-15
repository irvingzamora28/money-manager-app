import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import CategoryInterface from "../../interfaces/CategoryInterface";
import CategoryStateInterface from "../../interfaces/CategoryStateInterface";
import { ErrorResponseInterface } from "../../interfaces/ErrorResponseInterface";
import categoryService from "./categoryService";

const getCategories = createAsyncThunk<CategoryInterface[], null, { state: RootState; rejectValue: ErrorResponseInterface }>(
	"categories/all",
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user?.token ?? "";
			if (token) {
				const result = await categoryService.getCategories(token);
				return result;
			} else {
				throw new Error(`Error getting credentials`);
				
			}
		} catch (error: any) {
			return thunkAPI.rejectWithValue({type:"categories", message:error.message})
		}
	}
);

const initialState: CategoryStateInterface = {
	categories: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	error: { type: "", message: "" },
	success: { type: "", message: "" },
};

const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCategories.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getCategories.fulfilled, (state, action: PayloadAction<CategoryInterface[]>) => {
				state.isLoading = false;
				state.categories = action.payload;
			})
			.addCase(getCategories.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				if (action.payload)
				state.error = action.payload;
			});
	},
});

export { getCategories };
export default categorySlice.reducer;
